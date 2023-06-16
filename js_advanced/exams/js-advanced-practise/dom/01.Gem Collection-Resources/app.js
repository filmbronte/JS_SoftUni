window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById('gem-name');
    const colorInput = document.getElementById('color');
    const caratsInput = document.getElementById('carats');
    const priceInput = document.getElementById('price');
    const typeInput = document.getElementById('type');

    const previewList = document.getElementById('preview-list');
    const collection = document.getElementById('collection');

    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', add);

    function add() {
        if (nameInput.value == '' || colorInput.value == '' || caratsInput.value == '' || priceInput.value == '' || typeInput.value == '') {
            return;
        }
        addBtn.disabled = true;

        const li = document.createElement('li');
        li.setAttribute('class', 'gem-info');
        previewList.appendChild(li);

        const article = document.createElement('article');
        li.appendChild(article);

        const name = document.createElement('h4');
        name.textContent = nameInput.value;
        article.appendChild(name);

        const pColor = document.createElement('p');
        pColor.textContent = `Color: ${colorInput.value}`;
        article.appendChild(pColor);

        const pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${caratsInput.value}`;
        article.appendChild(pCarats);

        const pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${priceInput.value}`;
        article.appendChild(pPrice);

        const pType = document.createElement('p');
        pType.textContent = `Type: ${typeInput.value}`;
        article.appendChild(pType);

        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = "Save to Collection";
        li.appendChild(saveBtn);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = "Edit Information";
        li.appendChild(editBtn);

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = "Cancel";
        li.appendChild(cancelBtn);

        editBtn.addEventListener('click', edit);
        cancelBtn.addEventListener('click', cancel);
        saveBtn.addEventListener('click', save);

        const nameEdit = nameInput.value;
        const colorEdit = colorInput.value;
        const caratsEdit = caratsInput.value;
        const priceEdit = priceInput.value;
        const typeEdit = typeInput.value;

        nameInput.value = '';
        colorInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';
        typeInput.value = '';

        function save() {
            li.remove();
            addBtn.disabled = false;

            const newLi = document.createElement('li');
            collection.appendChild(newLi);

            const p = document.createElement('p');
            p.setAttribute('class', 'collection-item');
            p.textContent = `${nameEdit} - Color: ${colorEdit}/ Carats: ${caratsEdit}/ Price: ${priceEdit}$/ Type: ${typeEdit}`;
            newLi.appendChild(p);
        }

        function edit() {
            li.remove();
            addBtn.disabled = false;

            nameInput.value = nameEdit;
            colorInput.value = colorEdit;
            caratsInput.value = caratsEdit;
            priceInput.value = priceEdit;
            typeInput.value = typeEdit;
        }

        function cancel() {
            li.remove();
            addBtn.disabled = false;
        }
    }
}
