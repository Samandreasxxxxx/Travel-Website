/*
 * Main JavaScript file for the ghumoowithus travel website.
 *
 * This script enhances the user experience by adding smooth
 * page transitions, responsive navigation toggling and a simple
 * handler for the contact form.  
 */

document.addEventListener('DOMContentLoaded', () => {
  // Apply fade‑in class once the DOM is ready
  document.body.classList.add('fade-in');

  // Page transition on navigation link click
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    // Ensure the link points to another HTML page within our site
    if (href && href.endsWith('.html')) {
      link.addEventListener('click', event => {
        // Ignore if user is holding modifier keys (e.g. ctrl/cmd to open in new tab)
        if (event.ctrlKey || event.metaKey || event.shiftKey) return;
        event.preventDefault();
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 350);
      });
    }
  });

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // Contact form submission handling
  const contactForm = document.querySelector('form.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      // In a real project you would send the data via fetch/AJAX.
      alert('Thank you! Your message has been received.');
      contactForm.reset();
    });
  }
});