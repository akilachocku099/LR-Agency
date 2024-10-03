// Select all navigation items
const navItems = document.querySelectorAll('.nav-item');

// Adds click event listener to each nav item
navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent default action
        event.preventDefault();

        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));

        // Add active class to the clicked nav item
        this.classList.add('active');

        // Scroll to the section smoothly
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let slideIndex = 1; // Initialize slide index
showSlides(slideIndex); // Show the first slide on page load

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); // Update slide index
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); // Set slide index
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Wrap around if n exceeds the number of slides
    if (n > slides.length) { 
        slideIndex = 1; 
    }   
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    // Debugging: Log the current slide index
    console.log("Current slide index:", slideIndex);

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Check if the slide exists and display it
    if (slideIndex > 0 && slideIndex <= slides.length) {
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
    } else {
        console.error("Slide not found for index:", slideIndex - 1);
    }
}

// Auto slideshow functionality
let autoSlideIndex = 0;
function autoShowSlides() {
    autoSlideIndex++;
    slideIndex = (autoSlideIndex % document.getElementsByClassName("mySlides").length) + 1; // Get total slides count
    showSlides(slideIndex); // Show the current slide
    setTimeout(autoShowSlides, 4000); // Change image every 4 seconds
}

autoShowSlides(); // Start the automatic slideshow
