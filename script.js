document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    
    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(showNextItem, 5000);
    
    // Form submission
    const feedbackForm = document.getElementById('feedbackForm');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, phone, email, message });
        
        // Show success message
        alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
        
        // Reset form
        feedbackForm.reset();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Calculate button click
    const calculateBtn = document.querySelector('.cta .btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            alert('Для расчета стоимости панно свяжитесь с нами по телефону или через форму обратной связи.');
        });
    }
});