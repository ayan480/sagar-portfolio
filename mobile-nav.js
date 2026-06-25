// Mobile Navigation Handler

document.addEventListener('DOMContentLoaded', function() {
  // Find the navigation container
  const navContainer = document.querySelector('nav > div');
  if (!navContainer) {
    console.error('Navigation container not found');
    return;
  }
  
  // Find the nav links container (the div with links)
  const navLinks = navContainer.querySelector('div:last-child');
  if (!navLinks) {
    console.error('Nav links container not found');
    return;
  }
  
  console.log('Mobile nav initialized, found', navLinks.querySelectorAll('a').length, 'links');
  
  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'mobile-menu-toggle';
  hamburger.setAttribute('aria-label', 'Toggle mobile menu');
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  document.body.appendChild(overlay);
  
  // Insert hamburger before the nav links
  navContainer.insertBefore(hamburger, navLinks);
  
  // Toggle menu function
  function toggleMenu() {
    const isOpen = navLinks.classList.contains('mobile-menu-open');
    
    if (isOpen) {
      navLinks.classList.remove('mobile-menu-open');
      overlay.classList.remove('active');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
      console.log('Menu closed');
    } else {
      navLinks.classList.add('mobile-menu-open');
      overlay.classList.add('active');
      hamburger.innerHTML = '<i class="fas fa-times"></i>';
      document.body.style.overflow = 'hidden';
      console.log('Menu opened');
    }
  }
  
  // Event listeners
  hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });
  
  overlay.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });
  
  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  console.log('Adding click handlers to', links.length, 'links');
  
  links.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      console.log('Link', index, 'clicked:', this.href);
      
      // Only close menu if it's open on mobile
      if (window.innerWidth <= 768 && navLinks.classList.contains('mobile-menu-open')) {
        console.log('Closing menu immediately for navigation');
        // Close menu immediately - don't use setTimeout
        // The browser will handle navigation after this event completes
        navLinks.classList.remove('mobile-menu-open');
        overlay.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
      }
      
      // Let the default navigation happen - don't prevent it
      // The browser will navigate after this click handler completes
    });
  });
  
  // Close menu on window resize if open
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks.classList.contains('mobile-menu-open')) {
      toggleMenu();
    }
  });
});
