const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    form.reset();
  });
}
// ====== Lightbox ======
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// PDF Lightbox
const openPdf = document.getElementById("openPdf");
const pdfLightbox = document.getElementById("pdfLightbox");
const pdfClose = document.querySelector(".pdf-close");

openPdf.addEventListener("click", () => {
  pdfLightbox.style.display = "flex";
});

pdfClose.addEventListener("click", () => {
  pdfLightbox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === pdfLightbox) {
    pdfLightbox.style.display = "none";
  }
});
