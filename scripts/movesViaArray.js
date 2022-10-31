const checkKeyAndPlayerCoordinates = () => {
    if (!isNextBlockAvailable(direction, 'head')) {
        endGame();
        return ;
    }

    if (direction === 'right') movePlayer(headXposition, headYposition + 1);
    if (direction === 'left')  movePlayer(headXposition, headYposition - 1);
    if (direction === 'down')  movePlayer(headXposition + 1, headYposition);
    if (direction === 'up')    movePlayer(headXposition - 1, headYposition);
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
    boardMap[newheadXposition][newheadYposition] = `H-${direction}`;

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

const isNextBlockAvailable = (nextBlock, endPosition) => {
    const endXposition = endPosition === 'head' ?
        headXposition :
        tailXposition;

    const endYposition = endPosition === 'head' ?
        headYposition :
        tailYposition;

    if (nextBlock === 'right' && (boardMap[endXposition][endYposition + 1] === '' || boardMap[endXposition][endYposition + 1] === 'F')) return true;
    if (nextBlock === 'left'  && (boardMap[endXposition][endYposition - 1] === '' || boardMap[endXposition][endYposition - 1] === 'F')) return true;
    if (nextBlock === 'down'  && boardMap[endXposition + 1]){
        if (boardMap[endXposition + 1][endYposition] === '' || boardMap[endXposition + 1][endYposition] === 'F') return true; 
    }
    if (nextBlock === 'up'    && boardMap[endXposition - 1]){
        if (boardMap[endXposition - 1][endYposition] === '' || boardMap[endXposition - 1][endYposition] === 'F') return true;
    }

    return false;
}

const findAvailableDirection = (end) => {
    const endXposition = end === 'head' ? 
        headXposition :
        tailXposition;

    const endYposition = end === 'head' ?
        headYposition :
        tailYposition;

    if (boardMap[endXposition][endYposition + 1] === '' || boardMap[endXposition][endYposition + 1] === 'F') {
        return 'right';
    }
    if (boardMap[endXposition][endYposition - 1] === '' || boardMap[endXposition][endYposition - 1] === 'F') {
        return 'left';
    }
    if (boardMap[endXposition + 1]){
        if (boardMap[endXposition + 1][endYposition] === '' || boardMap[endXposition + 1][endYposition] === 'F') {
            return 'down'; 
        }
    }
    if (boardMap[endXposition - 1]){
        if (boardMap[endXposition - 1][endYposition] === '' || boardMap[endXposition - 1][endYposition] === 'F') {
            return 'up';
        }
    }
}

const changePlayerDirection = evt => {
    const newDirection = directionsKeys[evt.key];
    if (!newDirection) return;

    const isNewDirectioOposite = opositeDirection[newDirection] === direction;
    if (isNewDirectioOposite) return;

    const isDirectionValid = isNextBlockAvailable(newDirection, 'head');

    if (!isDirectionValid) endGame();

    direction = newDirection;
}

document.addEventListener('keydown', changePlayerDirection);

