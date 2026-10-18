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

// --- 2. Увеличение картинок (Лайтбокс) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("zoomedImage");
const closeBtn = document.querySelector(".close");
const zoomableImages = document.querySelectorAll(".zoomable");

// Открытие при клике на картинку
zoomableImages.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Закрытие при клике на крестик
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Закрытие при клике на пустое место вокруг картинки
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Закрытие по кнопке Esc
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});