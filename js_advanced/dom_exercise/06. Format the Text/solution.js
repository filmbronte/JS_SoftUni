function solve() {
  const textArea = document.getElementById('input');
  const output = document.getElementById('output');

  const sentences = (textArea.value.split('.')).slice(0, -1);

  for (let i = 0; i < sentences.length; i += 3) {
    if (sentences[i] != '') {
      const newSentences = `${sentences.slice(i, i + 3).join('. ')}.`;
      output.innerHTML += `<p> ${newSentences} </p>`;
    }
  }
}