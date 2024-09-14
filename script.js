// Toggle Mobile Menu (if your website is responsive)
const mainMenu = document.querySelector('.main-menu');
const toggleMenu = () => {
    mainMenu.classList.toggle('active');
};

// Add event listener for menu toggle
const menuToggleBtn = document.querySelector('.logo');
menuToggleBtn.addEventListener('click', toggleMenu);

// Add functionality for "Shop Now" button in the showcase
const shopNowBtn = document.querySelector('.showcase .btn');
shopNowBtn.addEventListener('click', () => {
    alert('Redirecting to the shop page!');
});

// Add functionality for "Learn More" buttons in product cards
const learnMoreBtns = document.querySelectorAll('.home-cards .btn');
learnMoreBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        alert('More information coming soon!');
    });
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
