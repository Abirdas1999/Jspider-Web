let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ms = document.getElementById("ms");

let minVal = localStorage.getItem("min") ? localStorage.getItem("min") : 0;
let secVal = localStorage.getItem("sec") ? localStorage.getItem("sec") : 0;
let msVal = localStorage.getItem("ms") ? localStorage.getItem("ms") : 0;
min.innerText = minVal;
sec.innerText = secVal;
ms.innerText = msVal;

document.getElementById("startBtn").addEventListener("click", startTimerHandle);
document.getElementById("stopBtn").addEventListener("click", stopTimerHandle);
document.getElementById("resetBtn").addEventListener("click", restTimerHandle);

let interval = setInterval(() => {
	msVal++;
	if (msVal == 100) {
		secVal++;
		msVal = 0;
	}
	if (secVal == 60) {
		minVal++;
		secVal = 0;
	}

	localStorage.setItem("min", minVal);
	localStorage.setItem("sec", secVal);
	localStorage.setItem("ms", msVal);
}, 10);
function startTimerHandle() {
    interval;
}
function stopTimerHandle() {
	clearInterval(interval);
}
function restTimerHandle() {
	clearInterval(interval);
	minVal = 0;
	secVal = 0;
	msVal = 0;
	localStorage.setItem("min", minVal);
	localStorage.setItem("sec", secVal);
	localStorage.setItem("ms", msVal);
}

