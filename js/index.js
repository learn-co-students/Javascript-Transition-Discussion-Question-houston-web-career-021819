// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.addEventListener('DOMContentLoaded', function(){
  const saveLincolnButton = document.querySelector('#save_lincoln')
  saveLincolnButton.addEventListener('click', function(){
    const milliseconds = document.querySelector('#interval')
    const value = Number(milliseconds.value)

    const zombieLincoln = document.querySelector('#foreground')
    const opacityChange = 1/value * 5
    zombieLincoln.style.opacity = 1
    const interval = setInterval(function(){
      if (zombieLincoln.style.opacity > 0) {
        zombieLincoln.style.opacity -= opacityChange
      } else {
        const hiddenMessage = document.querySelector('#hidden-message')
        hiddenMessage.style.display = ""
      }
    }, 5);
    setTimeout(function(){
      clearInterval(interval)
    }, (value + 5))
  })
})
