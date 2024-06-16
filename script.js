function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
let slidehome = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(home) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[home].style.display = 'block';
}

function nextSlide() {
  slidehome = (slidehome + 1) % totalSlides;
  showSlide(slidehome);
}

function prevSlide() {
  slidehome = (slidehome - 1 + totalSlides) % totalSlides;
  showSlide(slidehome);
}

function autoSlide() {
  nextSlide();
}

setInterval(autoSlide, 6000);
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View All Poducts"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
const textContent = document.getElementById('text-content');
const readMoreButton = document.getElementById('ViewPoducts');

let isExpanded = false;

readMoreButton.addEventListener('click', () => {
    if (!isExpanded) {
        textContent.style.overflow = 'visible';
        textContent.style.webkitLineClamp = 'none';
        readMoreButton.textContent = 'Read Less';
        isExpanded = true;
    } else {
        textContent.style.overflow = 'hidden';
        textContent.style.webkitLineClamp = '2';
        readMoreButton.textContent = 'View All Poducts';
        isExpanded = false;
    }
});
