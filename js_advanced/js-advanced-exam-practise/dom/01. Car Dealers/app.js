window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const fuelDropdown = document.getElementById('fuel');
  const originalCostInput = document.getElementById('original-cost');
  const sellingPriceInput = document.getElementById('selling-price');

  const publishBtn = document.getElementById('publish');

  const tableBody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');

  const profit = document.getElementById('profit');

  let totalSum = 0;

  publishBtn.addEventListener('click', publish);


  function publish(e) {
    e.preventDefault();

    const tr = document.createElement('tr');
    tr.setAttribute('class', 'row');

    if (makeInput.value != '' && modelInput.value != '' &&
      originalCostInput.value != '' && sellingPriceInput.value != '' &&
      (Number(sellingPriceInput.value) >= Number(originalCostInput.value))) {

      tableBody.appendChild(tr);

    }

    const makeTd = document.createElement('td');
    makeTd.textContent = makeInput.value;
    tr.appendChild(makeTd);

    const modelTd = document.createElement('td');
    modelTd.textContent = modelInput.value;
    tr.appendChild(modelTd);

    const yearTd = document.createElement('td');
    yearTd.textContent = yearInput.value;
    tr.appendChild(yearTd);

    const fuelTd = document.createElement('td');
    fuelTd.textContent = fuelDropdown.value;
    tr.appendChild(fuelTd);

    const ogCostTd = document.createElement('td');
    ogCostTd.textContent = originalCostInput.value;
    tr.appendChild(ogCostTd);

    const newPriceTd = document.createElement('td');
    newPriceTd.textContent = sellingPriceInput.value;
    tr.appendChild(newPriceTd);

    const buttonsTd = document.createElement('td');
    tr.appendChild(buttonsTd);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'action-btn edit');

    const sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.setAttribute('class', 'action-btn sell');

    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);

    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelDropdown.value = '';
    originalCostInput.value = '';
    sellingPriceInput.value = '';

    editBtn.addEventListener('click', edit);
    sellBtn.addEventListener('click', sell);


    function edit() {
      tr.remove();

      makeInput.value = makeTd.textContent;
      modelInput.value = modelTd.textContent;
      yearInput.value = yearTd.textContent;
      fuelDropdown.value = fuelTd.textContent;
      originalCostInput.value = ogCostTd.textContent;
      sellingPriceInput.value = newPriceTd.textContent;
    }

    function sell() {
      tr.remove();

      let difference = Number(newPriceTd.textContent) - Number(ogCostTd.textContent);
      // console.log(difference);

      const li = document.createElement('li');
      li.setAttribute('class', 'each-list');
      carsList.appendChild(li);

      const span1 = document.createElement('span');
      span1.textContent = `${makeTd.textContent} ${modelTd.textContent}`;
      li.appendChild(span1);

      const span2 = document.createElement('span');
      span2.textContent = yearTd.textContent;
      li.appendChild(span2);

      const span3 = document.createElement('span');
      span3.textContent = difference;
      li.appendChild(span3);

      totalSum += Number(span3.textContent);

      profit.textContent = totalSum.toFixed(2);
    }
  }
}
