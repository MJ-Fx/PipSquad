// Smart Money Concepts Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.institution, .behavior-card, .scenario, .type-card, .level-card, .method, .shift-type, .fvg-type, .state, .element, .event, .danger');
        
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
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.institution, .behavior-card, .scenario, .type-card, .level-card, .method, .shift-type, .fvg-type, .state, .element, .event, .danger');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Interactive diagrams
    const diagrams = document.querySelectorAll('.liquidity-diagram, .ob-diagram, .structure-diagram, .shift-diagram, .fvg-diagram, .state-diagram');
    diagrams.forEach(diagram => {
        diagram.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        diagram.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Interactive cheat sheets
    const sheets = document.querySelectorAll('.sheet');
    sheets.forEach(sheet => {
        sheet.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        sheet.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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






