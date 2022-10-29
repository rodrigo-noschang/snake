const checkKeyAndPlayerCoordinates = evt => {
    // if (direction === 'right' && boardMap[headXposition][headYposition + 1] === '') movePlayer(headXposition, headYposition + 1);
    // if (direction === 'left'  && boardMap[headXposition][headYposition - 1] === '') movePlayer(headXposition, headYposition - 1);
    // if (direction === 'down'  && boardMap[headXposition + 1])                   movePlayer(headXposition + 1, headYposition);
    // if (direction === 'up'    && boardMap[headXposition - 1])                   movePlayer(headXposition - 1, headYposition);

    if (evt.key === 'ArrowRight' && boardMap[headXposition][headYposition + 1] === '') movePlayer(headXposition, headYposition + 1);
    if (evt.key === 'ArrowLeft'  && boardMap[headXposition][headYposition - 1] === '') movePlayer(headXposition, headYposition - 1);
    if (evt.key === 'ArrowDown'  && boardMap[headXposition + 1])                   movePlayer(headXposition + 1, headYposition);
    if (evt.key === 'ArrowUp'    && boardMap[headXposition - 1])                   movePlayer(headXposition - 1, headYposition);
}

const deleteTailAndSetNewOne = () => {
    if (playerSize === 1) {
        tailXposition = headXposition;
        tailYposition = headYposition;
        return;
    }

    // If player has size 2, the next tail will be the head, not a 
    // normal "body" part.
    const nextBodyPart = playerSize === 2 ? 'H' : 'B';

    boardMap[tailXposition][tailYposition] = '';
    const currentTail = document.getElementById(`${tailXposition}-${tailYposition}`);
    currentTail.classList.remove('body');

    if (boardMap[tailXposition + 1]) {
        if (boardMap[tailXposition + 1][tailYposition] === nextBodyPart)
        tailXposition = tailXposition + 1;
    }
    if (boardMap[tailXposition - 1]) {
        if (boardMap[tailXposition - 1][tailYposition] === nextBodyPart)
        tailXposition = tailXposition - 1;
    } 
    if (boardMap[tailXposition][tailYposition + 1] === nextBodyPart) {
        tailYposition = tailYposition + 1;
    } 
    if (boardMap[tailXposition][tailYposition - 1] === nextBodyPart) {
        tailYposition = tailYposition - 1;
    }

    boardMap[tailXposition][tailYposition] = 'T';
    const newTail = document.getElementById(`${tailXposition}-${tailYposition}`);
    newTail.classList.add('body');
}

const movePlayer = (newheadXposition, newheadYposition) => {
    // The idea is to remove the current tail, and rebuild a head in front of
    // the current one.
    deleteTailAndSetNewOne();

    // =================
    if (playerSize > 2) boardMap[headXposition][newheadYposition] = 'B';
    boardMap[newheadXposition][newheadYposition] = 'H';

    const currentCell = document.getElementById(`${headXposition}-${headYposition}`);
    currentCell.classList.remove('head');
    
    const nextCell = document.getElementById(`${newheadXposition}-${newheadYposition}`);
    nextCell.classList.add('head');
    
    headXposition = newheadXposition;
    headYposition = newheadYposition;
}

const changePlayerDirection = evt => {
    direction = directionsKeys[evt.key];
}

// document.addEventListener('keydown', changePlayerDirection);
document.addEventListener('keydown', checkKeyAndPlayerCoordinates);


const growPlayer = () => {
    const currentCell = document.getElementById(`${headXposition}-${headYposition}`);
    currentCell.classList.remove('head');
    currentCell.classList.add('body');

    if (playerSize === 1) {
        boardMap[headXposition][headYposition] = 'T';
        tailXposition = headXposition;
        tailYposition = headYposition;   
    } else {
        boardMap[headXposition][headYposition] = 'B';
    }

    if (direction === 'right') {
        boardMap[headXposition][headYposition + 1] = 'H';

        const newCell = document.getElementById(`${headXposition}-${headYposition + 1}`);
        newCell.classList.add('head');

        headXposition = headXposition;
        headYposition = headYposition + 1;
    }

    playerSize++;
}