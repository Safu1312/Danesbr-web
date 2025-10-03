document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded'); // Debug line
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    
    console.log('Button:', mobileMenuBtn); // Debug line
    console.log('Menu:', mobileMenu); // Debug line
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Button clicked'); // Debug line
            
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icons
            if (hamburgerIcon && closeIcon) {
                hamburgerIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            }
        });
        
        // Close menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                if (hamburgerIcon && closeIcon) {
                    hamburgerIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        });
    } else {
        console.error('Mobile menu elements not found!');
    }
});
