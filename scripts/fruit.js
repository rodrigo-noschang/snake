const placeFruit = () => {
    let randomXposition = generateRandomValue();
    let randomYposition = generateRandomValue();
    
    while (boardMap[randomXposition][randomYposition] !== '') {
        randomXposition = generateRandomValue();
        randomYposition = generateRandomValue();
    } 

    boardMap[randomXposition][randomYposition] = 'F';

    updateBoard();
}

placeFruit();