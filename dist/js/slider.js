let currentIndex = 0;
const prevSlide = document.getElementById("prev-slide");
const nextSlide = document.getElementById("next-slide");
const slider = document.getElementById("slider");

prevSlide.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.marginLeft = `-${currentIndex * 100}%`
    }
});

nextSlide.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
        slider.style.marginLeft = `-${currentIndex * 100}%`
    }
})
