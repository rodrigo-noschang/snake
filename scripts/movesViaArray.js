const checkKeyAndPlayerCoordinates = () => {
    if (!isNextBlockAvailable(direction)) return ;

    if (direction === 'right') movePlayer(headXposition, headYposition + 1);
    if (direction === 'left')  movePlayer(headXposition, headYposition - 1);
    if (direction === 'down')  movePlayer(headXposition + 1, headYposition);
    if (direction === 'up')    movePlayer(headXposition - 1, headYposition);
}

const updateTail = (newXtailPosition, newYtailPosition) => {
    tailXposition = newXtailPosition;
    tailYposition = newYtailPosition;
}

const findNewTail = () => {
    const tailDirection = boardMap[tailXposition][tailYposition].split('-')[1];
    boardMap[tailXposition][tailYposition] = '';
    
    if (tailDirection === 'right') {
        tailYposition += 1;
    } else if (tailDirection === 'left') {
        tailYposition -= 1;
    } else if (tailDirection === 'down') {
        tailXposition += 1;
    } else if (tailDirection === 'up') {
        tailXposition -= 1;
    }

    boardMap[tailXposition][tailYposition] = boardMap[tailXposition][tailYposition].replace('B', 'T');
}

const movePlayer = (newheadXposition, newheadYposition) => {
    const IsNextCellAFruit = boardMap[newheadXposition][newheadYposition] === 'F';
    boardMap[newheadXposition][newheadYposition] = 'H';

    if (playerSize === 1) {
        boardMap[headXposition][headYposition] = '';
    } else {
        boardMap[headXposition][headYposition] = `B-${direction}`;
        findNewTail();
    }

    headXposition = newheadXposition;
    headYposition = newheadYposition;
    
    if (IsNextCellAFruit) {
        grow();
        placeFruit();
    }
    updateBoard();
}

const isNextBlockAvailable = nextBlock => {
    if (nextBlock === 'right' && (boardMap[headXposition][headYposition + 1] === '' || boardMap[headXposition][headYposition + 1] === 'F')) return true;
    if (nextBlock === 'left'  && (boardMap[headXposition][headYposition - 1] === '' || boardMap[headXposition][headYposition - 1] === 'F')) return true;
    if (nextBlock === 'down'  && boardMap[headXposition + 1]){
        if (boardMap[headXposition + 1][headYposition] === '' || boardMap[headXposition + 1][headYposition] === 'F') return true; 
    }
    if (nextBlock === 'up'    && boardMap[headXposition - 1]){
        if (boardMap[headXposition - 1][headYposition] === '' || boardMap[headXposition - 1][headYposition] === 'F') return true;
    }

    return false;
}

const changePlayerDirection = evt => {
    const newDirection = directionsKeys[evt.key];
    const isDirectionValid = isNextBlockAvailable(newDirection);

    direction = isDirectionValid ? newDirection : direction;
}

document.addEventListener('keydown', changePlayerDirection);

