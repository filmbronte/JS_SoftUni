function addItem() {
    const ul = document.getElementById('items');
    const newLi = document.createElement('li');
    const input = document.getElementById('newItemText');
    const error = document.getElementById('error');

    if (input.value != '') {
        newLi.textContent = input.value;
        ul.appendChild(newLi);
        input.value = '';
        error.textContent = '';
    } else {
        error.textContent = 'Put in a value!';
    }
}