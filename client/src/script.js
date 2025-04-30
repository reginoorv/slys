// Main JavaScript file for Sly's Barbershop website

// Run after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  setupMobileMenu();
  
  // Scroll Reveal Animation
  setupScrollReveal();
  
  // Reviews Carousel
  setupReviewsCarousel();
  
  // Navigation Active State
  setupNavigation();
});

// Mobile Menu Functionality
function setupMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
}

// Scroll Reveal Animation
function setupScrollReveal() {
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(item => {
      const windowHeight = window.innerHeight;
      const elementTop = item.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        item.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check on page load
}

// Reviews Carousel
function setupReviewsCarousel() {
  let currentReviewSlide = 0;
  const reviewsContainer = document.getElementById('reviews-container');
  
  if (!reviewsContainer) return;
  
  const reviewSlides = reviewsContainer.children;
  const totalSlides = reviewSlides.length;
  
  function updateReviewsPosition() {
    const slideWidth = reviewSlides[0].offsetWidth;
    reviewsContainer.style.transform = `translateX(-${currentReviewSlide * slideWidth}px)`;
  }
  
  function nextReview() {
    currentReviewSlide = (currentReviewSlide + 1) % totalSlides;
    updateReviewsPosition();
  }
  
  function prevReview() {
    currentReviewSlide = (currentReviewSlide - 1 + totalSlides) % totalSlides;
    updateReviewsPosition();
  }
  
  const nextButton = document.getElementById('next-review');
  const prevButton = document.getElementById('prev-review');
  
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', nextReview);
    prevButton.addEventListener('click', prevReview);
  }
  
  // Update on window resize
  window.addEventListener('resize', updateReviewsPosition);
  
  // Auto rotate reviews
  const reviewInterval = setInterval(nextReview, 5000);
  
  // Pause auto rotation on hover
  const reviewCarousel = document.querySelector('.review-carousel');
  if (reviewCarousel) {
    reviewCarousel.addEventListener('mouseenter', () => {
      clearInterval(reviewInterval);
    });
  }
}

// Navigation Active State
function setupNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  
  function setActiveNav() {
    let scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-primary');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-primary');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNav);
  setActiveNav(); // Initial check on page load
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
