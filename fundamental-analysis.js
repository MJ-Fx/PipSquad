// Fundamental Analysis Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for statement tabs
    const statementTabBtns = document.querySelectorAll('.statement-tabs .tab-btn');
    const statementTabContents = document.querySelectorAll('.statement-tabs .tab-content');
    
    statementTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            statementTabBtns.forEach(btn => btn.classList.remove('active'));
            statementTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Tab functionality for ratio tabs
    const ratioTabBtns = document.querySelectorAll('.ratio-tabs .tab-btn');
    const ratioTabContents = document.querySelectorAll('.ratio-tabs .tab-content');
    
    ratioTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            ratioTabBtns.forEach(btn => btn.classList.remove('active'));
            ratioTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Tab functionality for case study tabs
    const caseTabBtns = document.querySelectorAll('.casestudy-tabs .tab-btn');
    const caseTabContents = document.querySelectorAll('.casestudy-tabs .tab-content');
    
    caseTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            caseTabBtns.forEach(btn => btn.classList.remove('active'));
            caseTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.factor-card, .policy-card, .method-card, .metric-card, .analysis-section, .resource-type');
        
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
    const animatedElements = document.querySelectorAll('.factor-card, .policy-card, .method-card, .metric-card, .analysis-section, .resource-type');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Interactive formula elements
    const formulas = document.querySelectorAll('.formula');
    formulas.forEach(formula => {
        formula.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f1f1f1';
        });
        
        formula.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f8f9fa';
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