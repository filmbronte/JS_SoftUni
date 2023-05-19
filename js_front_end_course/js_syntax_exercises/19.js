function stringSubstring(word, text) {
    word = word.toLowerCase();
    let textArr = text.split(" ");
    for (const el of textArr) {
        if (el.toLowerCase() === word) {
            return word;
        }
    }
    return `${word} not found!`;
}

console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));
console.log(stringSubstring('python', 'JavaScript is the best programming language'));