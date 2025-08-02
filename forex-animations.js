// Forex Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.advantage-card, .asset-card, .participant-tier, .term-card, .session, .trader-card, .order-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    const animatedElements = document.querySelectorAll('.advantage-card, .asset-card, .participant-tier, .term-card, .session, .trader-card, .order-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Interactive currency pair example
    const currencyExample = document.querySelector('.quote-example');
    if(currencyExample) {
        currencyExample.addEventListener('click', function() {
            const randomRate = (1 + Math.random() * 0.1).toFixed(5);
            this.querySelector('.quote-currency').textContent = `USD = ${randomRate}`;
            
            // Brief highlight animation
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Stop default jump
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Smooth scroll to the section
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without reloading
      history.pushState(null, null, targetId);
    }
  });
});





window.addEventListener('load', function() {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'auto' });
      }, 100); // Small delay to ensure DOM is ready
    }
  }
});



let debounceTimer;
window.addEventListener('scroll', function() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    // Your scroll logic here
  }, 50); // Adjust delay as needed
});