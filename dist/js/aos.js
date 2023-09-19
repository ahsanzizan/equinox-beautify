const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      entry.target.classList.add("animate", "animated");

      if (entry.target.getAttribute("id") == "tentang-kami") {
        const numbers = document.querySelectorAll(".animate-number");
        numbers.forEach((number) => {
          window.animateValue(number, 0, number.dataset.number, 3000);
        });
      }

      if (entry.target.getAttribute("id") == "katalog") {
        const images = document.querySelectorAll(".animate-catalogue");
        images.forEach((image) => {
          image.classList.add("animate");
        });

        setTimeout(() => {
          document.querySelectorAll('img').forEach((image) => {
            if (image.dataset.delete) {
              image.remove();
            }
          });
        }, 7000);
      }
    }
  });
});

const elements = document.querySelectorAll("section");
elements.forEach((el) => observer.observe(el));
