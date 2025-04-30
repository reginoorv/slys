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
      // Toggle hidden class untuk menampilkan/menyembunyikan menu
      mobileMenu.classList.toggle('hidden');
      
      // Mengubah icon saat menu di-toggle
      const menuIcon = this.querySelector('i');
      if (menuIcon) {
        if (mobileMenu.classList.contains('hidden')) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        } else {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        }
      }
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        
        // Reset icon saat menu ditutup
        const menuIcon = menuToggle.querySelector('i');
        if (menuIcon) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
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
  let reviewInterval;
  let isAutoPlaying = true;
  
  function updateReviewsPosition(smooth = true) {
    const slideWidth = reviewSlides[0].offsetWidth;
    if (smooth) {
      reviewsContainer.style.transition = 'transform 0.6s ease';
    } else {
      reviewsContainer.style.transition = 'none';
    }
    reviewsContainer.style.transform = `translateX(-${currentReviewSlide * slideWidth}px)`;
  }
  
  function nextReview() {
    currentReviewSlide = (currentReviewSlide + 1) % totalSlides;
    updateReviewsPosition();
    updateDotIndicators();
  }
  
  function prevReview() {
    currentReviewSlide = (currentReviewSlide - 1 + totalSlides) % totalSlides;
    updateReviewsPosition();
    updateDotIndicators();
  }
  
  function goToSlide(index) {
    currentReviewSlide = index;
    updateReviewsPosition();
    updateDotIndicators();
  }
  
  // Create dot indicators
  function createDotIndicators() {
    const dotsContainer = document.getElementById('review-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('review-dot');
      if (i === currentReviewSlide) {
        dot.classList.add('active');
      }
      dot.setAttribute('aria-label', `Go to review ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }
  
  function updateDotIndicators() {
    const dots = document.querySelectorAll('.review-dot');
    dots.forEach((dot, index) => {
      if (index === currentReviewSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Create dot indicators
  createDotIndicators();
  
  const nextButton = document.getElementById('next-review');
  const prevButton = document.getElementById('prev-review');
  const autoplayToggle = document.getElementById('autoplay-toggle');
  
  if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => {
      nextReview();
      if (isAutoPlaying) {
        // Reset timer when manually navigating
        clearInterval(reviewInterval);
        startAutoPlay();
      }
    });
    
    prevButton.addEventListener('click', () => {
      prevReview();
      if (isAutoPlaying) {
        // Reset timer when manually navigating
        clearInterval(reviewInterval);
        startAutoPlay();
      }
    });
  }
  
  if (autoplayToggle) {
    autoplayToggle.addEventListener('click', toggleAutoPlay);
  }
  
  function toggleAutoPlay() {
    if (isAutoPlaying) {
      stopAutoPlay();
      if (autoplayToggle) {
        autoplayToggle.innerHTML = '<i class="fas fa-play"></i>';
        autoplayToggle.setAttribute('aria-label', 'Start autoplay');
      }
    } else {
      startAutoPlay();
      if (autoplayToggle) {
        autoplayToggle.innerHTML = '<i class="fas fa-pause"></i>';
        autoplayToggle.setAttribute('aria-label', 'Pause autoplay');
      }
    }
    isAutoPlaying = !isAutoPlaying;
  }
  
  function startAutoPlay() {
    reviewInterval = setInterval(nextReview, 5000);
  }
  
  function stopAutoPlay() {
    clearInterval(reviewInterval);
  }
  
  // Update on window resize
  window.addEventListener('resize', () => updateReviewsPosition(false));
  
  // Start auto rotation
  startAutoPlay();
  
  // Pause auto rotation on hover
  const reviewCarousel = document.querySelector('.review-carousel');
  if (reviewCarousel) {
    reviewCarousel.addEventListener('mouseenter', () => {
      if (isAutoPlaying) {
        stopAutoPlay();
      }
    });
    
    reviewCarousel.addEventListener('mouseleave', () => {
      if (isAutoPlaying) {
        startAutoPlay();
      }
    });
  }
  
  // Add touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  reviewsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });
  
  reviewsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    if (isAutoPlaying) {
      startAutoPlay();
    }
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      nextReview();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      prevReview();
    }
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
