// Função para atualizar o relógio
function updateClock() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const greetingElement = document.getElementById('greeting');
    const bodyElement = document.body;

    // Obtém o horário atual
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Atualiza os elementos do relógio com o tempo formatado
    hoursElement.textContent = padTime(hours);
    minutesElement.textContent = padTime(minutes);
    secondsElement.textContent = padTime(seconds);

    // Define a saudação e o fundo com base no horário
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

// Função para adicionar um zero à esquerda, se necessário
function padTime(time) {
    return time < 10 ? '0' + time : time;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez ao carregar a página
updateClock();
