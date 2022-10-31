const endGameModal = document.querySelector('.end-game-modal');
const restartButton = document.querySelector('.end-game-restart');

const endGame = () => {
    clearInterval(movementTimerId);
    endGameModal.classList.remove('invisible');
}

const resetGame = () => {
    // Switch the buttons:
    stop.classList.add('hidden');
    start.classList.remove('hidden');

    // Show modal:
    endGameModal.classList.add('invisible');

    // Reset board:
    boardMap.splice(0);
    
    // Reset player positions
    headXposition = 0;
    headYposition = 0;

    tailXposition = 0;
    tailYposition = 0;

    direction = 'right';

    createBoard();
    placePlayer();
    placeFruit();

}

restartButton.addEventListener('click', resetGame);