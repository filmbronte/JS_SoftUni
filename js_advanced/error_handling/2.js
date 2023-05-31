function cards(face, suit) {
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    return {
        face,
        suit: suits[suit],
        toString() {
            return face + suit;
        },
    };
}

cards('A', 'S');
cards('10', 'H');
cards('1', 'C');
