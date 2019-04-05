// $("#save_lincoln").click(() => saveLincoln(parseInt($("#interval").val())));

// function saveLincoln(interval) {
//   if (isNaN(interval)) {
//     interval = 10000;
//   }
//   const opacity_interval = 0.005;
//   $("#foreground").style.opacity;
// }

const button = document.querySelector("#save_lincoln");

button.addEventListener("click", function() {
  saveLincoln();
});

function saveLincoln() {
  const zomb = document.querySelector("#foreground");
  const intervalBox = document.querySelector("#interval");
  const interval = intervalBox.value;
  const hiddenMessage = document.querySelector("h3");
  zomb.style.opacity = 1;
  const save = setInterval(function() {
    if (zomb.style.opacity > 0) {
      zomb.style.opacity -= 0.01;
      hiddenMessage.style.opacity =
        parseFloat(hiddenMessage.style.opacity) + 0.01;
    } else {
      clearInterval(save);
    }
  }, interval / 100);
}
