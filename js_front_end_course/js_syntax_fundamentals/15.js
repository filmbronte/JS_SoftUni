function censoredWords(text, bannedWord) {
    while (text.includes(bannedWord)) {
        text = text.replace(bannedWord, '*'.repeat(bannedWord.length));
    }
    console.log(text);
}

censoredWords("fuck this fuck fuck", "fuck");

