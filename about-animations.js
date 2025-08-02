// About Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const count = parseInt(target.getAttribute('data-count'));
                    const duration = 2000; // Animation duration in ms
                    const step = Math.floor(duration / count);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += Math.ceil(count / 50); // Adjust for smoother animation
                        if (current > count) {
                            current = count;
                            clearInterval(timer);
                        }
                        target.textContent = current.toLocaleString();
                    }, step);
                    
                    observer.unobserve(target);
                }
            });
        }, options);
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    // Animate step cards on scroll
    const stepCards = document.querySelectorAll('.step-card');
    
    if (stepCards.length > 0) {
        const stepObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });
        
        stepCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            stepObserver.observe(card);
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