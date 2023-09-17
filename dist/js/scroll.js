function disableScroll() {
  // Get the current page scroll position
  scrollTop = document.documentElement.scrollTop;
  (scrollLeft = document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}
