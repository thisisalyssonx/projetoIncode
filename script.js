function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const greetingElement = document.getElementById('greeting');
    const bodyElement = document.body;
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hoursElement.textContent = padTime(hours);
    minutesElement.textContent = padTime(minutes);
    secondsElement.textContent = padTime(seconds);

    if (hours >= 6 && hours < 12) {
        greetingElement.textContent = 'Bom dia!';
        bodyElement.style.backgroundImage = "url('imgs/manha.png')";
    } else if (hours >= 12 && hours < 18) {
        greetingElement.textContent = 'Boa tarde!';
        bodyElement.style.backgroundImage = "url('tarde.gif')";
    } else {
        greetingElement.textContent = 'Boa noite!';
        bodyElement.style.backgroundImage = "url('imgs/noite.gif')";
    }
}

function padTime(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(updateClock, 1000);

updateClock();
