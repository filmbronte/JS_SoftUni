function solve() {
  const textArea = document.getElementById('input');
  const output = document.getElementById('output');

  const sentences = textArea.value.split('.').filter(s => s !== '');

  // for (let i = 0; i < sentences.length; i += 3) {
  //   if (sentences[i] != '') {
  //     const newSentences = `${sentences.slice(i, i + 3).join('. ')}.`;
  //     output.innerHTML += `<p> ${newSentences} </p>`;
  //   }
  // }

  while (sentences.length > 0) {
    const newSentences = sentences.splice(0, 3).join('. ');
    const p = document.createElement('p');
    p.textContent = `${newSentences}.`;
    output.appendChild(p);
  }

}