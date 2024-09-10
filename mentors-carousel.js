document.addEventListener('DOMContentLoaded', () => {
    const mentorsCarousel = document.querySelector('.mentors-carousel');
    const mentorCards = document.querySelectorAll('.mentor-card');
  
    mentorCards.forEach((card, index) => {
      card.style.scrollSnapAlign = index === 0 ? 'start' : 'none';
    });
  
    mentorsCarousel.addEventListener('scroll', () => {
      const scrollLeft = mentorsCarousel.scrollLeft;
      const cardWidth = mentorCards[0].offsetWidth;
      const currentIndex = Math.round(scrollLeft / cardWidth);
  
      mentorCards.forEach((card, index) => {
        card.style.scrollSnapAlign = index === currentIndex ? 'start' : 'none';
      });
    });
  });