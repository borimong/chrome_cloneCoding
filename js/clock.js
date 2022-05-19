const clock = document.querySelector("h2#clock");

function getClock() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
}

getClock();//I did a change!
setInterval(getClock, 1000);