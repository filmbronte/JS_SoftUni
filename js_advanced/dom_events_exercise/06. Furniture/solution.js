function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);

  // parse input json and create table
  // -- find input text area
  // -- parse JSON
  // -- for every item:
  // ---- create row
  // ---- append row to table body

  function generate() {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement('tr');

      // image column
      const c1 = createColumn('img', item.img);
      row.appendChild(c1);

      // name column
      const c2 = createColumn('p', item.name);
      row.appendChild(c2);

      // price column
      const c3 = createColumn('p', item.price);
      row.appendChild(c3);

      // decoration column
      const c4 = createColumn('p', item.decFactor);
      row.appendChild(c4);


      // input column
      const c5 = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      c5.append(checkbox);
      row.append(c5);

      tbody.appendChild(row);
    }

    // find user choices and summarise purchase
    // -- find all checked boxes
    // -- for every row:
    // ---- read data from parent row
    // ---- append to result
    // -- output result to textarea

    function createColumn(type, content) {
      const result = document.createElement('td');
      let inner;
      if (type == 'img') {
        inner = document.createElement('img');
        inner.src = content;
      } else {
        inner = document.createElement('p');
        inner.textContent = content;
      }
      result.appendChild(inner);

      return result;
    }
  }
}