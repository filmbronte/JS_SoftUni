function solve() {
    const taskName = document.getElementById('task');
    const descriptionName = document.getElementById('description');
    const dateName = document.getElementById('date');

    const openSection = document.querySelectorAll('section')[1];

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const div = openSection.childNodes[3];
        const article = document.createElement('article');

        if (taskName.value !== '' && descriptionName.value != '' && dateName.value !== '') {
            div.appendChild(article);
        }

        const h4 = document.createElement('h4');
        h4.textContent = taskName.value;
        article.appendChild(h4);

        const description = document.createElement('p');
        description.textContent = `Description: ${descriptionName.value}`;
        article.appendChild(description);

        const date = document.createElement('p');
        date.textContent = `Due Date: ${dateName.value}`;
        article.appendChild(date);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.setAttribute('class', 'flex');
        const startBtn = document.createElement('button');
        startBtn.setAttribute('class', 'green');
        startBtn.textContent = 'Start';
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'red');
        deleteBtn.textContent = 'Delete';

        buttonsDiv.appendChild(startBtn);
        buttonsDiv.appendChild(deleteBtn);
        article.appendChild(buttonsDiv);

        deleteBtn.addEventListener('click', del)

        console.log(openSection.childNodes);
    }

    function del(e) {
        e.target.parentNode.parentNode.remove();
    }
}