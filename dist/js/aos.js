const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      const numbers = document.querySelectorAll(".animate-number");
      numbers.forEach((number) => {
        window.animateValue(number, 100, number.dataset.number, 2000);
      });
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

const elements = document.querySelectorAll("section");
elements.forEach((el) => observer.observe(el));
