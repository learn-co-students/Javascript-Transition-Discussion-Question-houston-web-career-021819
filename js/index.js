// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let button = document.querySelector('#save_lincoln')
let zombie = document.querySelector('#foreground')
let interval = document.querySelector('#interval')
zombie.style.opacity = 1

button.addEventListener('click', function() {
    fade(zombie, interval)
})

function fade(zombie, interval){
  setInterval(function(){
      if (zombie.style.opacity>0) {
        zombie.style.opacity = zombie.style.opacity-(1/(interval.value/20))
      }
  }, 20)
}