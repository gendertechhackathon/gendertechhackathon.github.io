document.addEventListener('DOMContentLoaded', () => {
    // Existing functionality from script.js
    const revealElements = document.querySelectorAll('.reveal');
    const floatingCta = document.querySelector('.floating-cta');
    const headerCta = document.querySelector('header .cta-button');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active');
            }
        }

        // Check if the header CTA is out of view
        const headerCtaRect = headerCta.getBoundingClientRect();
        if (headerCtaRect.bottom <= 0) {
            floatingCta.style.display = 'block';
        } else {
            floatingCta.style.display = 'none';
        }
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('active');
        hamburgerIcon.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    };

    // Close mobile menu when a link is clicked
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('active');
        document.body.classList.remove('menu-open');
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    hamburgerIcon.addEventListener('click', toggleMobileMenu);
    mobileMenuLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

/*     // Mentors carousel functionality
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
    }); */

    // New FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Initially hide all answers
        answer.style.maxHeight = '0';
        answer.style.padding = '0 20px';

        question.addEventListener('click', () => {
            // Toggle the active class on the question
            question.classList.toggle('active');

            // Toggle the display of the answer
            if (answer.style.maxHeight === '0px') {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '10px 20px';
            } else {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 20px';
            }
        });
    });
});