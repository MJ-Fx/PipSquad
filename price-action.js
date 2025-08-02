// Price Action Mastery Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.pattern-card, .structure-card, .fib-method, .pyramid-level, .process-step');
        
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('in-view');
                }, index * 100);
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.pattern-card, .structure-card, .fib-method, .pyramid-level, .process-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Interactive pattern cards
    const patternCards = document.querySelectorAll('.pattern-card');
    patternCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // Animate candle diagrams on hover
    const candleDiagrams = document.querySelectorAll('.pattern-diagram');
    candleDiagrams.forEach(diagram => {
        diagram.addEventListener('mouseenter', function() {
            const candles = this.querySelectorAll('.candle');
            candles.forEach((candle, index) => {
                setTimeout(() => {
                    candle.style.transform = 'scale(1.1)';
                    candle.style.transition = 'transform 0.3s ease';
                }, index * 100);
            });
        });
        
        diagram.addEventListener('mouseleave', function() {
            const candles = this.querySelectorAll('.candle');
            candles.forEach(candle => {
                candle.style.transform = 'scale(1)';
            });
        });
    });
    
    // Animate Fibonacci diagrams
    const fibDiagrams = document.querySelectorAll('.fib-diagram');
    fibDiagrams.forEach(diagram => {
        diagram.addEventListener('mouseenter', function() {
            const levels = this.querySelectorAll('.level');
            levels.forEach((level, index) => {
                setTimeout(() => {
                    level.style.opacity = '1';
                    level.style.transform = 'translateX(0)';
                }, index * 100);
            });
        });
    });
    
    // Interactive structure diagrams
    const structureDiagrams = document.querySelectorAll('.structure-diagram');
    structureDiagrams.forEach(diagram => {
        diagram.addEventListener('click', function() {
            this.classList.toggle('zoomed');
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
    
    // Animate trading plan components
    const planComponents = document.querySelectorAll('.component');
    planComponents.forEach((component, index) => {
        setTimeout(() => {
            component.style.opacity = '1';
            component.style.transform = 'translateY(0)';
        }, index * 200);
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