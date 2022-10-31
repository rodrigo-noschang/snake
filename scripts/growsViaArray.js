const grow = () => {
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