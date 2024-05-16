
var slideIndex = 1;
showSlides(slideIndex);

// Function to advance slides automatically
function autoSlides() {
    plusSlides(1);
    setTimeout(autoSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

// Start automatic slideshow
autoSlides();

// Function to control slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

