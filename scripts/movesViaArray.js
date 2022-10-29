const checkKeyAndPlayerCoordinates = evt => {
    // if (direction === 'right' && boardMap[headXposition][headYposition + 1] === '') movePlayer(headXposition, headYposition + 1);
    // if (direction === 'left'  && boardMap[headXposition][headYposition - 1] === '') movePlayer(headXposition, headYposition - 1);
    // if (direction === 'down'  && boardMap[headXposition + 1])                   movePlayer(headXposition + 1, headYposition);
    // if (direction === 'up'    && boardMap[headXposition - 1])                   movePlayer(headXposition - 1, headYposition);
    
    if (evt.key === 'ArrowRight' && boardMap[headXposition][headYposition + 1] === '') movePlayer(headXposition, headYposition + 1);
    if (evt.key === 'ArrowLeft'  && boardMap[headXposition][headYposition - 1] === '') movePlayer(headXposition, headYposition - 1);
    if (evt.key === 'ArrowDown'  && boardMap[headXposition + 1]) {
        if (boardMap[headXposition + 1][headYposition] === '') movePlayer(headXposition + 1, headYposition);
    }
    if (evt.key === 'ArrowUp'    && boardMap[headXposition - 1]){
        if (boardMap[headXposition - 1][headYposition] === '') movePlayer(headXposition - 1, headYposition);
    }
}

const updateTail = (newXtailPosition, newYtailPosition) => {
    tailXposition = newXtailPosition;
    tailYposition = newYtailPosition;

    boardMap[newXtailPosition][newYtailPosition] = 'T';
}

const findNewTail = () => {
    boardMap[tailXposition][tailYposition] = '';

    const nextBodyPart = 'B';

    if (boardMap[tailXposition + 1]) {
        if (boardMap[tailXposition + 1][tailYposition] === nextBodyPart) {
            updateTail(tailXposition + 1, tailYposition);
            return;
        }
    }

    if (boardMap[tailXposition - 1]) {
        if (boardMap[tailXposition - 1][tailYposition] === nextBodyPart) {
            updateTail(tailXposition - 1, tailYposition);
            return;
        }
    }

    if (boardMap[tailXposition][tailYposition + 1] === nextBodyPart) {
        updateTail(tailXposition, tailYposition + 1);
        return;
    }

    if (boardMap[tailXposition][tailYposition - 1] === nextBodyPart) {
        updateTail(tailXposition, tailYposition - 1);
        return;
    }
}


const movePlayer = (newheadXposition, newheadYposition) => {
    boardMap[newheadXposition][newheadYposition] = 'H';

    if (playerSize === 1) {
        boardMap[headXposition][headYposition] = '';
    } else {
        boardMap[headXposition][headYposition] = 'B';
        findNewTail();
    }

    headXposition = newheadXposition;
    headYposition = newheadYposition;
    
    updateBoard();
}

document.addEventListener('keydown', checkKeyAndPlayerCoordinates);