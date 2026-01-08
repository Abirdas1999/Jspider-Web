let dateEle = document.getElementById("date-ele");
let timeEle = document.getElementById(" ");
function timer(){
    let d1 = new Date();
    let currTime = d1.toLocaleTimeString();
    timeEle.textContent = currTime;
    let currDate = d1.toLocaleDateString();
    dateEle.textContent = currDate;
}
setInterval(timer,1000);