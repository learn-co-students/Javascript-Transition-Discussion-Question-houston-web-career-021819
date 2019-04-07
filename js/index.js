// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

function fadeOutEffect() {
  var fadeTarget = document.getElementById("foreground");
  var interval = document.getElementById("interval").value;
  if(interval<=0){
    alert("Please enter the time greater than zero(in milliseconds).");
    return false;
  }
  else{
      var fadeEffect = setInterval(function () {
          if (!fadeTarget.style.opacity) {
              fadeTarget.style.opacity = 1;
          }
          if (fadeTarget.style.opacity > 0) {
              fadeTarget.style.opacity -= 0.1;
          } else {
              clearInterval(fadeEffect);
          }
      }, interval/10);
    }
}
document.getElementById("save_lincoln").addEventListener('click', fadeOutEffect);

