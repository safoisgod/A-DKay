document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.getElementById('services');
    const servicesHeader = document.querySelector('.services-header');
    const cards = document.querySelectorAll('.service-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const navigation = document.querySelector('.navigation');
    let currentServiceIndex = 0;
    let cardsPerPage = 2; // Default to 2 cards per page

    // Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set section height to 100vh
                servicesSection.style.height = '100vh';

                // Trigger fade-in and move-up animation for header
                servicesHeader.classList.add('visible');

                // Trigger fade-in and move-up animation for cards with stagger
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200); // 200ms delay between each card
                });

                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Start observing the services section
    observer.observe(servicesSection);

    // Function to determine cards per page based on screen size
    function updateCardsPerPage() {
        if (window.innerWidth <= 850) {
            cardsPerPage = 1;
        } else if (window.innerWidth <= 1050) {
            cardsPerPage = 2;
        } else {
            cardsPerPage = cards.length; // Show all cards above 1050px
        }
    }

    // Function to update visible cards
    function updateVisibleCards() {
        cards.forEach((card, index) => {
            if (window.innerWidth <= 1050) {
                if (index >= currentServiceIndex && index < currentServiceIndex + cardsPerPage) {
                    card.classList.add('active-card');
                } else {
                    card.classList.remove('active-card');
                }
            } else {
                card.classList.add('active-card'); // Show all cards above 1050px
            }
        });

        // Update button states
        prevBtn.disabled = currentServiceIndex === 0;
        nextBtn.disabled = currentServiceIndex >= cards.length - cardsPerPage;
    }

    // Show navigation buttons only for screens <= 1050px
    function updateNavigationVisibility() {
        if (window.innerWidth <= 1050) {
            navigation.style.display = 'flex';
        } else {
            navigation.style.display = 'none';
        }
    }

    // Initial setup
    updateCardsPerPage();
    updateVisibleCards();
    updateNavigationVisibility();

    // Update on window resize
    window.addEventListener('resize', () => {
        updateCardsPerPage();
        // Adjust currentIndex to ensure it's valid for the new cardsPerPage
        if (currentServiceIndex > cards.length - cardsPerPage) {
            currentServiceIndex = Math.max(0, cards.length - cardsPerPage);
        }
        updateVisibleCards();
        updateNavigationVisibility();
    });

    // Navigation button events
    prevBtn.addEventListener('click', () => {
        if (currentServiceIndex > 0) {
            currentServiceIndex -= cardsPerPage;
            updateVisibleCards();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentServiceIndex < cards.length - cardsPerPage) {
            currentServiceIndex += cardsPerPage;
            updateVisibleCards();
        }
    });

    // Click-to-activate functionality (for above 1050px)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth > 1050) {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });

    // custom.js

// Services Section
function initServicesSection() {
    const servicesSection = document.getElementById('services');
    const servicesHeader = document.querySelector('.services-header');
    const cards = document.querySelectorAll('.service-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const navigation = document.querySelector('.navigation');

    // Error handling: Check if required elements exist
    if (!servicesSection || !servicesHeader || !cards.length || !prevBtn || !nextBtn || !navigation) {
        console.error('Services section: Required DOM elements are missing.');
        return;
    }

    let currentServiceIndex = 0;
    let cardsPerPage = 2; // Default to 2 cards per page

    // Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set section height to 100vh
                servicesSection.style.height = '100vh';

                // Trigger fade-in and move-up animation for header
                servicesHeader.classList.add('visible');

                // Trigger fade-in and move-up animation for cards with stagger
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200); // 200ms delay between each card
                });

                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Start observing the services section
    observer.observe(servicesSection);

    // Function to determine cards per page based on screen size
    function updateCardsPerPage() {
        if (window.innerWidth <= 850) {
            cardsPerPage = 1;
        } else if (window.innerWidth <= 1050) {
            cardsPerPage = 2;
        } else {
            cardsPerPage = cards.length; // Show all cards above 1050px
        }
    }

    // Function to update visible cards
    function updateVisibleCards() {
        cards.forEach((card, index) => {
            if (window.innerWidth <= 1050) {
                const isVisible = index >= currentServiceIndex && index < currentServiceIndex + cardsPerPage;
                card.classList.toggle('active-card', isVisible);
            } else {
                card.classList.add('active-card'); // Show all cards above 1050px
            }
        });

        // Update button states
        prevBtn.disabled = currentServiceIndex === 0;
        nextBtn.disabled = currentServiceIndex >= cards.length - cardsPerPage;
    }

    // Show navigation buttons only for screens <= 1050px
    function updateNavigationVisibility() {
        navigation.style.display = window.innerWidth <= 1050? 'flex' : 'none';
    }

    // Initial setup
    updateCardsPerPage();
    updateVisibleCards();
    updateNavigationVisibility();

    // Update on window resize
    window.addEventListener('resize', () => {
        updateCardsPerPage();
        // Adjust currentIndex to ensure it's valid for the new cardsPerPage
        if (currentServiceIndex > cards.length - cardsPerPage) {
            currentServiceIndex = Math.max(0, cards.length - cardsPerPage);
        }
        updateVisibleCards();
        updateNavigationVisibility();
    });

    // Navigation button events
    prevBtn.addEventListener('click', () => {
        if (currentServiceIndex > 0) {
            currentServiceIndex -= cardsPerPage;
            updateVisibleCards();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentServiceIndex < cards.length - cardsPerPage) {
            currentServiceIndex += cardsPerPage;
            updateVisibleCards();
        }
    });

    // Click-to-activate functionality (for above 1050px)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (window.innerWidth > 1050) {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });
}
});
