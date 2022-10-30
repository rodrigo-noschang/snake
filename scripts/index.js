const board = document.querySelector('.board-container');
const boardDimensions = 10;
let playerSize = 1;
let headXposition = 0;
let headYposition = 0;
let tailXposition = headXposition;
let tailYposition = tailXposition;
let direction = 'right';
let movementTimerId = ''; // Start and Stop game.
let intervalTimer = 500; // The lower this value, the fastest the snake will move
const boardMap = [];

const directionsKeys = {
    ArrowRight: 'right',
    ArrowLeft:  'left',
    ArrowDown:  'down',
    ArrowUp:    'up'
}

const generateRandomValue = () => {
    const randomNumber = Math.floor(Math.random() * boardDimensions);
    
    return randomNumber;
}

const createBoard = () => {
    for (let i = 0; i < boardDimensions; i++) {
        boardMap.push([]);
        
        for(let j = 0; j < boardDimensions; j++) {
            boardMap[i].push('');
            
            const block = document.createElement('div');
            block.classList.add('block');
            block.id = `${i}-${j}`;

            board.appendChild(block);
        }
    }
}

const placePlayer = () => {
    boardMap[headXposition][headYposition] = 'H';
    const chosenCell = document.getElementById(`${headXposition}-${headYposition}`);
    chosenCell.classList.add('head');
}

createBoard();
placePlayer();

const updateBoard = () => {
    board.innerHTML = '';

    for (let i = 0; i < boardDimensions; i++) {
        
        for(let j = 0; j < boardDimensions; j++) {
            const cellContent = boardMap[i][j];
            
            const block = document.createElement('div');
            block.classList.add('block');
            block.id = `${i}-${j}`;
            
            if (cellContent.includes('H')) {
                block.classList.add('head');
            } else if (cellContent.includes('T') || cellContent.includes('B')) {
                block.classList.add('body');
            } else if (cellContent === 'F') {
                block.classList.add('fruit');
            }
            
            board.appendChild(block);
        }
    }
}