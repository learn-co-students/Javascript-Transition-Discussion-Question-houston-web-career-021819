/*
$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}
*/


 let saveBtn = document.querySelector('#save_lincoln')
 let lincoln = document.querySelector('#background')
 let zombie = document.querySelector('#foreground')
     zombie.style.opacity = 1

 saveBtn.addEventListener('click', function(){
  let input = document.querySelector('#interval')
  let time = parseInt(input.value)
  let speed = 1/time * 5    //so the machine to run the code is roughly 5 mileseconds that's why we times 5 here
    function fadeOut(){
       zombie.style.opacity -= speed  
    }
   
    const interval = setInterval(fadeOut, 5)  
    setTimeout(function(){ clearInterval(interval)}, time)
 })

 
