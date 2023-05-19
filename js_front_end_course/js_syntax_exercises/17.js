function revealWords(someWords, text) {
    let words = someWords.split(', ');
    for (const word of words) {
        let templates = '*'.repeat(word.length);
        text = text.replace(templates, word);
    }
    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')