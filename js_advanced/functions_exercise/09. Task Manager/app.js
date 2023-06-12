function solve() {
    const taskName = document.getElementById('task');
    const descriptionName = document.getElementById('description');
    const dateName = document.getElementById('date');

    const openSection = document.querySelectorAll('section')[1];
    const inProgressSection = document.querySelectorAll('section')[2];
    const completeSection = document.querySelectorAll('section')[3];

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const div = openSection.childNodes[3];
        const article = document.createElement('article');

        if (taskName.value !== '' && descriptionName.value != '' && dateName.value !== '') {
            div.appendChild(article);
        }

        const h3 = document.createElement('h3');
        h3.textContent = taskName.value;
        article.appendChild(h3);

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

        deleteBtn.addEventListener('click', del);
        startBtn.addEventListener('click', start);

        const taskNew = taskName.value;
        const descriptionNew = descriptionName.value;
        const dateNew = dateName.value;

        taskName.value = '';
        descriptionName.value = '';
        dateName.value = '';

        function del(e) {
            e.target.parentNode.parentNode.remove();
        }

        function start(e) {
            e.target.parentNode.parentNode.remove();

            inProgressSection.childNodes[3].removeAttribute('id');
            const div = inProgressSection.childNodes[3];

            const article = document.createElement('article');
            div.appendChild(article);

            const h3 = document.createElement('h3');
            h3.textContent = taskNew;
            article.appendChild(h3);

            const description = document.createElement('p');
            description.textContent = `Description: ${descriptionNew}`;
            article.appendChild(description);

            const date = document.createElement('p');
            date.textContent = `Due Date: ${dateNew}`;
            article.appendChild(date);

            const buttonsDiv = document.createElement('div');
            buttonsDiv.setAttribute('class', 'flex');
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'red');
            deleteBtn.textContent = 'Delete';
            const finishBtn = document.createElement('button');
            finishBtn.setAttribute('class', 'orange');
            finishBtn.textContent = 'Finish';

            buttonsDiv.appendChild(deleteBtn);
            buttonsDiv.appendChild(finishBtn);
            article.appendChild(buttonsDiv);

            deleteBtn.addEventListener('click', del);
            finishBtn.addEventListener('click', finish);

        }

        function finish(e) {
            e.target.parentNode.parentNode.remove();

            const div = completeSection.childNodes[3];
            const article = document.createElement('article');


            div.appendChild(article);

            const h3 = document.createElement('h3');
            h3.textContent = taskNew;
            article.appendChild(h3);

            const description = document.createElement('p');
            description.textContent = `Description: ${descriptionNew}`;
            article.appendChild(description);

            const date = document.createElement('p');
            date.textContent = `Due Date: ${dateNew}`;
            article.appendChild(date);

        }
    }

}
