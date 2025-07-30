document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let currentItem = 0;
        carouselItems[currentItem].classList.add('active');
        
        function showNextItem() {
            carouselItems[currentItem].classList.remove('active');
            currentItem = (currentItem + 1) % carouselItems.length;
            carouselItems[currentItem].classList.add('active');
        }
        
        // Change slide every 5 seconds
        setInterval(showNextItem, 5000);
    }

    // Form submission
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
            
            // Reset form
            feedbackForm.reset();
        });
    }
    
    // Improved navigation handling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Handle internal anchor links (#section)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without page reload
                    history.pushState(null, null, href);
                }
            }
            // External links (.html, http, etc) will work normally
        });
    });
    
    // Calculate button click
    const calculateBtn = document.querySelector('.cta .btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            alert('Для расчета стоимости панно свяжитесь с нами по телефону или через форму обратной связи.');
        });
    }
    
    // Social links handler (optional)
    document.querySelectorAll('.social a').forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add tracking here
            console.log('Social link clicked:', this.href);
        });
    });
});


