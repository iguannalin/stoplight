let scrollCount = 0;
let lastScroll = 0;

window.addEventListener("load", () => {
  document.addEventListener("scroll", () => {
    switch (lastScroll > window.scrollY) {
      case (true):
        console.log('scroll down');
      case (false):
        console.log('scroll down');
    }
    console.log('scrolled', window.scrollY);
    lastScroll = window.scrollY;
  });
});