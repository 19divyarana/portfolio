document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links li a');
  
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
  });
  
  navLinksItems.forEach(item => {
      item.addEventListener('click', function() {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
      });
  });
  
  // Sticky Header
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopBtn.classList.add('active');
      } else {
          backToTopBtn.classList.remove('active');
      }
  });
  
  backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  // Form Submission
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const formData = new FormData(this);
          const formValues = Object.fromEntries(formData.entries());
          
          // Here you would typically send the form data to a server
          console.log('Form submitted:', formValues);
          
          // Show success message
          alert('Thank you for your message! I will get back to you soon.');
          
          // Reset form
          this.reset();
      });
  }
  
  // Animation on Scroll
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-content');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  };
  
  // Set initial state for animated elements
  document.querySelectorAll('.skill-category, .project-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  document.querySelectorAll('.about-content, .contact-content').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateX(-30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Dark Mode Toggle (optional - you can add a button for this)
  const darkModeToggle = document.createElement('button');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '30px';
  darkModeToggle.style.left = '30px';
  darkModeToggle.style.width = '50px';
  darkModeToggle.style.height = '50px';
  darkModeToggle.style.backgroundColor = 'var(--primary-color)';
  darkModeToggle.style.color = 'white';
  darkModeToggle.style.borderRadius = '50%';
  darkModeToggle.style.display = 'flex';
  darkModeToggle.style.alignItems = 'center';
  darkModeToggle.style.justifyContent = 'center';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.cursor = 'pointer';
  darkModeToggle.style.zIndex = '999';
  darkModeToggle.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
  document.body.appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          // You would need to add dark mode styles in your CSS
      } else {
          darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
  });
});