let scrollCount = 0;
let lastScroll = 0;

window.addEventListener("load", () => {
  document.addEventListener("scroll", () => {
    switch (lastScroll > window.scrollY) {
      case (true):
        console.log('scroll up');
        break;
      case (false):
        console.log('scroll down');
        drawStickPerson();
        break;
      default:
        break;
    }
    let x = Math.abs(window.scrollY - lastScroll);
    if (x < 3) console.log('slow');
    else if (x < 40) console.log('fast');
    else if (x >= 40) console.log('faster');
    lastScroll = window.scrollY;
  });

  function drawStickPerson() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {

      }
    }
  }
});
