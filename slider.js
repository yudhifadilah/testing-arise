// Slider script reusable
function initSlider(sliderId, dotsId) {
  const slides = document.getElementById(sliderId);
  const dotsContainer = document.getElementById(dotsId);
  const totalSlides = slides.children.length;
  let index = 0;

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll(".dot");

  function goToSlide(i) {
    index = i;
    slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function autoSlide() {
    index = (index + 1) % totalSlides;
    goToSlide(index);
  }

  setInterval(autoSlide, 3000);
}

// Toggle menu script
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
