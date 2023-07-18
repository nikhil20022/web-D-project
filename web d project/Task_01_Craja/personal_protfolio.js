document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to the menu links
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    for (const link of menuLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      // Validate form inputs
      if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        nameInput.focus();
        return;
      }
  
      if (emailInput.value.trim() === '') {
        alert('Please enter your email');
        emailInput.focus();
        return;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Please enter a message');
        messageInput.focus();
        return;
      }
  
      // Process form submission (You can add your own code here)
      alert('Form submitted successfully!');
      contactForm.reset();
    });
  });
  