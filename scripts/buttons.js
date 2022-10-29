// const start = document.querySelector('.start-game');
// const stop = document.querySelector('.stop-game');
const growButton = document.querySelector('.grow');

// start.addEventListener('click', () => {
//     movementTimerId = setInterval(checkKeyAndPlayerCoordinates, 1000);
//     start.classList.add('hidden');
//     stop.classList.remove('hidden');
// })

// stop.addEventListener('click', () => {
//     clearInterval(movementTimerId);
//     stop.classList.add('hidden');
//     start.classList.remove('hidden');
// })

growButton.addEventListener('click', grow)