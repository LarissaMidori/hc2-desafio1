import Countdown from"./countdown.js";

const blackFriday = new Countdown("24 November 2022 24:00:00 GMT-0300");
const time = document.querySelectorAll("[data-time]");

function showTime() {
    time.forEach((tempo, index) => {
        tempo.innerHTML = blackFriday.total[index]
    });
}

showTime();
setInterval(showTime, 1000);