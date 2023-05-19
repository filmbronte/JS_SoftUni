function hashtag(text) {
    let newText = text.split(' ');
    for (const word of newText) {
        if (word.startsWith('#') && word.length > 1) {
            console.log(word.substring(1));
        }
    }
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');