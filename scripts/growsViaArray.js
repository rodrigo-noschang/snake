const grow = () => {
    if (playerSize === 1) {
        tailXposition = headXposition;
        tailYposition = headYposition;

        headYposition = headYposition + 1

        boardMap[tailXposition][tailYposition] = 'T';
        boardMap[headXposition][headYposition] = 'H';
    } else {
        boardMap[headXposition][headYposition] = 'B';

        headYposition = headYposition + 1;

        boardMap[headXposition][headYposition] = 'H';
    }

    playerSize++;

    updateBoard();
}