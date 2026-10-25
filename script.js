// --- 1. Плавное появление карточек при скролле ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(
  '.service-card, .price-card, .contact-card, .about-photo, .about-card, .cta-section, .video-wrapper, .gallery-item, .review-card'
).forEach(el => {
  observer.observe(el);
});

// --- 2. Параллакс для фоновых элементов (движение при скролле) ---
const bgParallax = document.getElementById('bg-parallax');
window.addEventListener('scroll', () => {
  // Получаем текущую прокрутку
  let scrollY = window.scrollY;
  
  // Двигаем контейнер с фоновыми элементами вверх (скорость 0.4)
  if (bgParallax) {
    bgParallax.style.transform = `translateY(${scrollY * 0.4}px)`;
  }
});

// --- 3. Увеличение картинок (Лайтбокс) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("zoomedImage");
const closeBtn = document.querySelector(".close");
const zoomableImages = document.querySelectorAll(".zoomable");

zoomableImages.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
