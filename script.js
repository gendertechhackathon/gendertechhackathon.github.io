document.addEventListener("DOMContentLoaded", () => {
  // Existing functionality from script.js
  const revealElements = document.querySelectorAll(".reveal");
  const floatingCta = document.querySelector(".floating-cta");
  const headerCta = document.querySelector("header .cta-button");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active");
      } else {
        revealElements[i].classList.remove("active");
      }
    }

    // Check if the header CTA is out of view
    const headerCtaRect = headerCta.getBoundingClientRect();
    if (headerCtaRect.bottom <= 0) {
      floatingCta.style.display = "block";
    } else {
      floatingCta.style.display = "none";
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    mobileMenu.classList.remove("active");
    hamburgerIcon.classList.remove("active");
    document.body.classList.remove("menu-open");
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  hamburgerIcon.addEventListener("click", toggleMobileMenu);
  mobileMenuLinks.forEach((link) =>
    link.addEventListener("click", closeMobileMenu)
  );

  // const mentorsCarousel = document.querySelector('.mentors-carousel');
  // if (mentorsCarousel) {
  //     mentorsCarousel.addEventListener('wheel', function (e) {
  //         if (window.innerWidth < 768) { // Adjust based on your mobile breakpoint
  //             e.preventDefault(); // Prevent default vertical scrolling on mobile
  //             this.scrollLeft += e.deltaY * 0.5; // Adjust multiplier for scroll speed
  //         }
  //     });

  //     // Allow touch drag for mobile
  //     let isDown = false;
  //     let startX;
  //     let scrollLeft;

  //     mentorsCarousel.addEventListener('mousedown', (e) => {
  //         isDown = true;
  //         mentorsCarousel.classList.add('active');
  //         startX = e.pageX - mentorsCarousel.offsetLeft;
  //         scrollLeft = mentorsCarousel.scrollLeft;
  //     });

  //     mentorsCarousel.addEventListener('mouseleave', () => {
  //         isDown = false;
  //         mentorsCarousel.classList.remove('active');
  //     });

  //     mentorsCarousel.addEventListener('mouseup', () => {
  //         isDown = false;
  //         mentorsCarousel.classList.remove('active');
  //     });

  //     mentorsCarousel.addEventListener('mousemove', (e) => {
  //         if (!isDown) return;
  //         e.preventDefault();
  //         const x = e.pageX - mentorsCarousel.offsetLeft;
  //         const walk = (x - startX) * 3; // Adjust scroll speed
  //         mentorsCarousel.scrollLeft = scrollLeft - walk;
  //     });
  //     // Add event listeners for "Read more" buttons
  //     const readMoreButtons = document.querySelectorAll('.read-more');
  //     readMoreButtons.forEach(button => {
  //         button.addEventListener('click', function() {
  //         const bio = this.closest('.mentor-bio');
  //         bio.classList.toggle('expanded');
  //         this.textContent = bio.classList.contains('expanded') ? 'Read less' : 'Read more';
  //         });
  //     });
  // }

  const expandButtons = document.querySelectorAll(".expand-button");
  expandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const bio = button.previousElementSibling;
      bio.classList.toggle("expanded");
    });
  });

  const buttons = document.querySelectorAll(".expand-workshop-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle button text
      if (this.textContent === "+") {
        this.textContent = "−";
      } else {
        this.textContent = "+";
      }

      // Toggle expanded content
      const row = this.closest("tr");
      const expandedContent = row.nextElementSibling;
      expandedContent.classList.toggle("active");
    });
  });

  // // Modal functionality
  // const modal = document.getElementById("mentor-modal");
  // const closeModal = document.querySelector(".close");

  // // Add event listeners for expand buttons to open modal
  // document.querySelectorAll('.expand-button').forEach(button => {
  //     button.addEventListener('click', function () {
  //         const mentorCard = this.closest('.mentor-card');

  //         // Fill modal with content from the mentor card
  //         document.querySelector(".modal-mentor-image").src = mentorCard.querySelector(".mentor-image").src;
  //         document.querySelector(".modal-mentor-name").textContent = mentorCard.querySelector(".mentor-name").textContent;
  //         document.querySelector(".modal-mentor-title").textContent = mentorCard.querySelector(".mentor-title").textContent;
  //         document.querySelector(".modal-mentor-expertise").textContent = mentorCard.querySelector(".mentor-expertise").textContent;
  //         document.querySelector(".modal-mentor-bio").textContent = mentorCard.querySelector(".mentor-bio").textContent;

  //         // Show the modal
  //         modal.style.display = "flex";
  //     });
  // });

  // // Close the modal when the user clicks on <span> (x)
  // closeModal.onclick = function () {
  //     modal.style.display = "none";
  // }

  // // Close the modal when the user clicks outside the modal content
  // window.onclick = function (event) {
  //     if (event.target === modal) {
  //         modal.style.display = "none";
  //     }
  // }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    answer.style.maxHeight = "0";
    answer.style.padding = "0 20px";

    question.addEventListener("click", () => {
      question.classList.toggle("active");
      if (answer.style.maxHeight === "0px") {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "10px 20px";
      } else {
        answer.style.maxHeight = "0";
        answer.style.padding = "0 20px";
      }
    });
  });
});
