const grow = () => {
    if (!isNextBlockAvailable(direction, 'head')) {
        findAvailableDirection();
    }

    const newHeadYposition = 
        direction === 'right' ? headYposition + 1 :
        direction === 'left' ? headYposition - 1 :
        headYposition;

    const newHeadXposition = 
        direction === 'down' ? headXposition + 1 :
        direction === 'up' ? headXposition - 1 :
        headXposition;

    if (playerSize === 1) {
        tailXposition = headXposition;
        tailYposition = headYposition;

        boardMap[tailXposition][tailYposition] = `T-${direction}`;
    } else {
        boardMap[headXposition][headYposition] = `B-${direction}`;
    }
    
    headXposition = newHeadXposition;
    headYposition = newHeadYposition;

    boardMap[newHeadXposition][newHeadYposition] = `H-${direction}`;
    playerSize++;

    updateBoard();
}

const growFromTail = () => {
    if (playerSize === 1) {
        tailXposition = headXposition;
        tailYposition = headYposition;
    } else {
        boardMap[tailXposition][tailYposition] = boardMap[tailXposition][tailYposition].replace('T', 'B');
    }

    const currentTailDirection = boardMap[tailXposition][tailYposition].split('-')[1];
    let newTailDirection = opositeDirection[currentTailDirection];
    
    if (!isNextBlockAvailable(newTailDirection, 'tail')) {
        newTailDirection = findAvailableDirection('tail');
    }

    if (newTailDirection === 'right') tailYposition += 1;
    if (newTailDirection === 'left')  tailYposition -= 1;
    if (newTailDirection === 'down')  tailXposition += 1;
    if (newTailDirection === 'up')    tailXposition -= 1;

    boardMap[tailXposition][tailYposition] = `T-${opositeDirection[newTailDirection]}`;
    playerSize++;
    updateBoard();
}