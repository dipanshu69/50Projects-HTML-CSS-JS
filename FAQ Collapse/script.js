const button = document.querySelectorAll(".faq-toggle");
const faq = document.querySelectorAll(".faq");

button.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
