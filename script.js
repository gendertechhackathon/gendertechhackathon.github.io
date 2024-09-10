document.addEventListener('DOMContentLoaded', () => {
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
        hamburgerIcon.classList.toggle('active'); // Add this line
        document.body.classList.toggle('menu-open');
    };

    // Close mobile menu when a link is clicked
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('active'); // Add this line
        document.body.classList.remove('menu-open');
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    hamburgerIcon.addEventListener('click', toggleMobileMenu);
    mobileMenuLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
});