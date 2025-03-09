let timer = Date.now();

window.addEventListener("load", () => {
  console.log(`Load js: ${Date.now() - timer}`);
});

let timerForJQuery = Date.now();

$(function () {
  console.log(`Load Jquery: ${Date.now() - timerFJ}`);
});
