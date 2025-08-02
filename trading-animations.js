// Trading Psychology Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.bias-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other items
            if(!isExpanded) {
                document.querySelectorAll('.bias-header').forEach(h => {
                    if(h !== this) {
                        h.setAttribute('aria-expanded', 'false');
                        h.nextElementSibling.setAttribute('aria-hidden', 'true');
                    }
                });
            }
            
            // Toggle current item
            this.setAttribute('aria-expanded', !isExpanded);
            content.setAttribute('aria-hidden', isExpanded);
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.challenge-card, .principle-card, .shift-card, .technique-card, .case-card, .routine-step');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };
    
    // Set initial state
    const animatedElements = document.querySelectorAll('.challenge-card, .principle-card, .shift-card, .technique-card, .case-card, .routine-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Interactive challenge cards
    const challengeCards = document.querySelectorAll('.challenge-card');
    challengeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
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