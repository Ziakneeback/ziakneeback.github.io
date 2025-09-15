const form = document.getElementById("contactForm") as HTMLFormElement;

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    form.reset();
  });
}
