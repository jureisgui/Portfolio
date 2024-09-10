document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = burgerMenu.querySelector('i'); // Reference to the icon

    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        toggleMenu();
    });

    function toggleMenu() {
        // Toggle the mobile menu visibility
        mobileMenu.classList.toggle('hidden');
        
        // Toggle between bars and times icon
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');  // Hide the mobile menu
            icon.classList.remove('fa-times');   // Reset to bars icon
            icon.classList.add('fa-bars');
        }
    });

    // Prevent clicks inside the mobile menu from closing it
    mobileMenu.addEventListener('click', function(event) {
        event.stopPropagation();
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

            // Close any open accordion and reset icons
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

            // Toggle the current accordion and icon
            targetBody.classList.toggle('hidden');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });
});

