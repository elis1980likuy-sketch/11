// Плавное появление карточек при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.service-card, .price-card, .contact-card, .about-card, .cta-section'
).forEach(el => {
  observer.observe(el);
});