const grow = () => {
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

    boardMap[newHeadXposition][newHeadYposition] = 'H';
    playerSize++;

    updateBoard();
}