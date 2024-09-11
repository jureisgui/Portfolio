// Menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = burgerMenu.querySelector('i');
    const links = document.querySelectorAll('nav a');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a'); 

    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            closeMenu();
        }
    });

    mobileMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // close the mobile menu when a mobile menu link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    function closeMenu() {
        mobileMenu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    function scrollWithOffset(event) {
        event.preventDefault(); 
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // remove the #id from the URL
        history.replaceState(null, null, ' ');
    }

    links.forEach(link => {
        link.addEventListener('click', scrollWithOffset);
    });
});

// About me accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const targetBody = document.getElementById(targetId);
            const icon = header.querySelector('i');

            // close any open accordion and reset icons
            const allBodies = document.querySelectorAll('.accordion-body');
            const allIcons = document.querySelectorAll('.accordion-header i');
            allBodies.forEach(body => {
                if (body !== targetBody) {
                    body.classList.add('hidden');
                }
            });
            allIcons.forEach(icn => {
                icn.classList.remove('fa-chevron-up');
                icn.classList.add('fa-chevron-down');
            });

            // toggle the current accordion and icon
            targetBody.classList.toggle('hidden');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });
});

