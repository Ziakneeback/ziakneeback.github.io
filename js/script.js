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

// Лайтбокс для сертификатов
const certThumbnails = document.querySelectorAll(".cert-thumbnail");
const certLightbox = document.getElementById("certLightbox");
const certFrame = document.getElementById("certFrame");
const certImage = document.getElementById("certImage");
const certClose = certLightbox.querySelector(".pdf-close");

certThumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const type = thumb.getAttribute("data-type");
    const src = thumb.getAttribute("data-src");

    if (type === "pdf") {
      certFrame.src = src + "#toolbar=0";
      certFrame.style.display = "block";
      certImage.style.display = "none";
    } else {
      certImage.src = src;
      certImage.style.display = "block";
      certFrame.style.display = "none";
    }

    certLightbox.style.display = "flex";
  });
});

certClose.addEventListener("click", () => {
  certLightbox.style.display = "none";
  certFrame.src = "";
  certImage.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === certLightbox) {
    certLightbox.style.display = "none";
    certFrame.src = "";
    certImage.src = "";
  }
});

// Лайтбокс для документов
const docThumbnails = document.querySelectorAll(".doc-thumbnail");
const docLightbox = document.getElementById("docLightbox");
const docFrame = document.getElementById("docFrame");
const docImage = document.getElementById("docImage");
const docClose = docLightbox.querySelector(".pdf-close");

docThumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const type = thumb.getAttribute("data-type");
    const src = thumb.getAttribute("data-src");

    if (type === "pdf") {
      docFrame.src = src + "#toolbar=0";
      docFrame.style.display = "block";
      docImage.style.display = "none";
    } else {
      docImage.src = src;
      docImage.style.display = "block";
      docFrame.style.display = "none";
    }

    docLightbox.style.display = "flex";
  });
});

docClose.addEventListener("click", () => {
  docLightbox.style.display = "none";
  docFrame.src = "";
  docImage.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === docLightbox) {
    docLightbox.style.display = "none";
    docFrame.src = "";
    docImage.src = "";
  }
});
