function extractText() {
    let elems = document.getElementsByTagName('li');
    let arr = Array.from(elems);
    let allText = arr.map(x => x.textContent);

    let textArea = document.getElementById('result');
    textArea.value = allText.join('\n');
}
