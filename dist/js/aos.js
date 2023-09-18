const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      entry.target.classList.add("animate", "animated");
      const numbers = document.querySelectorAll(".animate-number");
      numbers.forEach((number) => {
        window.animateValue(number, 0, number.dataset.number, 2000);
      });
    }
  });
});

const elements = document.querySelectorAll("section");
elements.forEach((el) => observer.observe(el));
