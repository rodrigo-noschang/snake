const start = document.querySelector('.start-game');
const stop = document.querySelector('.stop-game');

start.addEventListener('click', () => {
    movementTimerId = setInterval(checkKeyAndPlayerCoordinates, intervalTimer);
    start.classList.add('hidden');
    stop.classList.remove('hidden');
})

stop.addEventListener('click', () => {
    clearInterval(movementTimerId);
    stop.classList.add('hidden');
    start.classList.remove('hidden');
})