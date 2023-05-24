function addItem() {
    const ul = document.getElementById('items');
    const newLi = document.createElement('li');
    const input = document.getElementById('newItemText');
    const error = document.getElementById('error');
    const newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', '#');
    // newAnchor.href = '#';


    if (input.value != '') {
        newAnchor.textContent = "[Delete]";
        newLi.textContent = input.value;
        newLi.appendChild(newAnchor);
        ul.appendChild(newLi);
        input.value = '';
        error.textContent = '';
        newAnchor.addEventListener('click', deleteHandler);

    } else {
        error.textContent = 'Put in a value!';
    }

    function deleteHandler(e) {
        const li = e.currentTarget.parentElement;
        li.remove();
    }
}