document.addEventListener('DOMContentLoaded', function() {
    // Get the slideshow element and the slides
    const slideshow = document.querySelector('.slideshow');
    const slides = slideshow.querySelectorAll('.slide');
  
    // Set the current slide to the first slide
    let currentSlide = 0;
  
    // Show the current slide and hide the other slides
    function showSlide() {
      slides.forEach(slide => {
        slide.style.opacity = 0;
      });
      slides[currentSlide].style.opacity = 1;
    }
  
    // Show the first slide
    showSlide();
  
    // Switch to the next slide every 3 seconds
    setInterval(function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }, 3000);

    document.addEventListener('DOMContentLoaded', function() {
        // Get all the navigation links
        const navLinks = document.querySelectorAll('header nav ul li a');
      
        // Add a click event listener to each link
        navLinks.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault();
      
            // Get the target element (the element the link scrolls to)
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
      
            // Smoothly scroll to the target element
            window.scroll({
              behavior: 'smooth',
              left: 0,
              top: target.offsetTop
            });
          });
        });
      });