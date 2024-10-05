document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const navbarBrand = document.getElementById('navbar-brand');
    const navLinks = navbar.querySelectorAll('a');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

    // Initialize dark mode based on user preference or previous setting
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Event listeners for dark mode toggles
    darkModeToggle.addEventListener('click', toggleDarkMode);
    mobileDarkModeToggle.addEventListener('click', toggleDarkMode);

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.style.top = navbar.offsetHeight + 'px';
        }
    }

    mobileMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });

    // Prevent clicks inside mobile menu from closing it
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close mobile menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle scroll events
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/70', 'dark:bg-gray-800/70', 'backdrop-filter', 'backdrop-blur-lg', 'shadow-md');
            navbar.classList.remove('bg-gradient-to-r', 'from-primary', 'to-secondary', 'dark:from-gray-800', 'dark:to-gray-900');
            navbarBrand.classList.remove('text-white', 'dark:text-gray-200');
            navbarBrand.classList.add('text-primary', 'dark:text-white');
            navLinks.forEach(link => {
                link.classList.remove('text-white', 'dark:text-gray-200', 'hover:text-tertiary', 'dark:hover:text-gray-400');
                link.classList.add('text-primary', 'dark:text-white', 'hover:text-secondary', 'dark:hover:text-gray-300');
            });
            mobileMenuButton.classList.remove('text-white', 'dark:text-gray-200');
            mobileMenuButton.classList.add('text-primary', 'dark:text-white');
        } else {
            navbar.classList.remove('bg-white/70', 'dark:bg-gray-800/70', 'backdrop-filter', 'backdrop-blur-lg', 'shadow-md');
            navbar.classList.add('bg-gradient-to-r', 'from-primary', 'to-secondary', 'dark:from-gray-800', 'dark:to-gray-900');
            navbarBrand.classList.add('text-white', 'dark:text-gray-200');
            navbarBrand.classList.remove('text-primary', 'dark:text-white');
            navLinks.forEach(link => {
                link.classList.add('text-white', 'dark:text-gray-200', 'hover:text-tertiary', 'dark:hover:text-gray-400');
                link.classList.remove('text-primary', 'dark:text-white', 'hover:text-secondary', 'dark:hover:text-gray-300');
            });
            mobileMenuButton.classList.add('text-white', 'dark:text-gray-200');
            mobileMenuButton.classList.remove('text-primary', 'dark:text-white');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Portfolio item shake animation
    function shakePortfolioItems() {
        const portfolioItems = document.querySelectorAll('.animate-shaky');
        portfolioItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('shaking');
                setTimeout(() => {
                    item.classList.remove('shaking');
                }, 1000); // Duration of shake animation
            }, index * 300); // Delay between shaking items
        });
    }

    // Run shake animation every 8 seconds
    setInterval(shakePortfolioItems, 8000);

    // Run initial shake animation after 2 seconds
    setTimeout(shakePortfolioItems, 2000);

    // Initial run of shake animation
    shakePortfolioItems();

    // Trigger the scroll event on page load
    window.dispatchEvent(new Event('scroll'));
});