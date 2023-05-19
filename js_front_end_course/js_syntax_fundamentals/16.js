function countStringOcc(text, word) {
    let words = text.split(' ');
    let count = 0;
    for (const x of words) {
        if (x === word) {
        count++;
        }
    }
    console.log(count);
}

countStringOcc('this is the is the', 'is');
