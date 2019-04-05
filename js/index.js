/*
$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}

*/

let imgZ = document.querySelector("#foreground");
const interval = document.querySelector("#interval");
const button = document.querySelector("#save_lincoln");
imgZ.style.opacity = 1;
function fadeOut() {
	let opacity = 0.2
	imgZ.style.opacity = imgZ.style.opacity - opacity
}


button.addEventListener("click", function() {
	if(parseInt(interval.value) === NaN) {
		interval.value = 10000;
		setInterval(fadeOut, interval.value)
	}
	else {
		setInterval(fadeOut, interval.value)
	}

	//if (interval === NaN) {
		//imgZ.style.opacity
	//}
})