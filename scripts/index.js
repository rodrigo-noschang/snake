const board = document.querySelector('.board-container');
const boardDimensions = 10;
let playerSize = 1;
let headXposition = 0;
let headYposition = 0;
let tailXposition = headXposition;
let tailYposition = tailXposition;
let direction = 'right';
let movementTimerId = ''; // Start and Stop game.
const boardMap = [];

const directionsKeys = {
    ArrowRight: 'right',
    ArrowLeft:  'left',
    ArrowDown:  'down',
    ArrowUp:    'up'
}

const backgroundCodes = {
    'T': 'body',
    'B': 'body',
    'H': 'head',
    '': ''
}

const createBoard = () => {
    for (let i = 0; i < boardDimensions; i++) {
        boardMap.push([]);
        
        for(let j = 0; j < boardDimensions; j++) {
            boardMap[i].push('');
            
            const block = document.createElement('div');
            block.classList.add('block');
            block.innerText = boardMap[i][j];
            block.id = `${i}-${j}`;

            board.appendChild(block);
        }
    }
}

const placePlayer = () => {
    boardMap[headXposition][headYposition] = 'H';
    const chosenCell = document.getElementById(`${headXposition}-${headYposition}`);
    chosenCell.classList.add('head');
    chosenCell.innerText = boardMap[headXposition][headYposition];
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
            block.innerText = boardMap[i][j];
            
            if (cellContent === 'H') {
                block.classList.add('head');
            } else if (cellContent === 'T' || cellContent === 'B') {
                block.classList.add('body');
            }
            
            board.appendChild(block);
        }
    }
}