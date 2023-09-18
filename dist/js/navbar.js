const navLink = document.querySelectorAll("nav ul a");
const hamburger = document.querySelector("#hamburger");
const navUl = document.querySelector("nav ul");
const sections = document.querySelectorAll("section[id]");
const logo = document.querySelector("#logo");

function disableScroll() {
  // Get the current page scroll position
  scrollTop = document.documentElement.scrollTop;
  scrollLeft = document.documentElement.scrollLeft,

  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () {};
}

function linkAction() {
  logo.classList.remove("text-white");
  navUl.classList.remove("nav-active");
  hamburger.classList.remove("hamburger-active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// function scrollActive() {
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".navbar a[href*=" + sectionId + "]")
//         .classList.remove("lg:text-neutral");
//       document
//         .querySelector(".navbar a[href*=" + sectionId + "]")
//         .classList.add("lg:text-primary");
//     } else {
//       document
//         .querySelector(".navbar a[href*=" + sectionId + "]")
//         .classList.remove("lg:text-primary");
//       document
//         .querySelector(".navbar a[href*=" + sectionId + "]")
//         .classList.add("lg:text-neutral");
//     }
//   });
// }

// window.addEventListener("scroll", scrollActive);

hamburger.addEventListener("click", () => {
  logo.classList.toggle("text-white");
  hamburger.classList.toggle("hamburger-active");
  navUl.classList.toggle("nav-active");
  if (navUl.classList.contains("nav-active")) {
    disableScroll();
  } else {
    enableScroll();
  }
});
