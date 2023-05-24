function addItem() {
    const ul = document.getElementById('items');
    const newLi = document.createElement('li');
    const input = document.getElementById('newItemText');
    if (input.value != '') {
        newLi.textContent = input.value;
        ul.appendChild(newLi);
        input.value = '';
    }
}