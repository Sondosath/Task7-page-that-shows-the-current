// c:/JoVision/index.js

const name = document.querySelector(".name")

//this function Create an HTML page that shows the current time in the format "HH:MM:SS", The time should update every second. function time() {
    function time() {
    const time = new Date();
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');

    let currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = currentTime;
}

setInterval(time, 1000);
time();


