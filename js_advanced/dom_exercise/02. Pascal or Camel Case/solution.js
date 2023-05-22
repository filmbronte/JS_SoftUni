function solve() {
  let text = document.getElementById('text').value;
  let namingConv = document.getElementById('naming-convention').value;
  let res = document.getElementById('result');

  let camalize = function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  };

  let pascalize = function toPascalCase(string) {
    return `${string}`
      .toLowerCase()
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w*)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3}`
      )
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  };


  if (namingConv == 'Camel Case') {
    res.textContent = camalize(text);
  } else if (namingConv == 'Pascal Case') {
    res.textContent = pascalize(text);
  } else {
    res.textContent = 'Error!';
  }

}