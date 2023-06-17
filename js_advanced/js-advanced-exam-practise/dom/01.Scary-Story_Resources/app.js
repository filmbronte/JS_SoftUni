window.addEventListener("load", solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const ageInput = document.getElementById('age');
    const storyTitleInput = document.getElementById('story-title');
    const genreInput = document.getElementById('genre');
    const storyInput = document.getElementById('story');

    const previewList = document.getElementById('preview-list');
    const main = document.getElementById('main');

    const publishBtn = document.getElementById('form-btn');

    publishBtn.addEventListener('click', publish);

    function publish() {
        if (firstNameInput.value == '' || lastNameInput.value == '' || ageInput.value == '' || storyTitleInput.value == ''
            || storyInput.value == '') {
            return;
        }

        const li = document.createElement('li');
        li.setAttribute('class', 'story-info');

        publishBtn.disabled = true;
        previewList.appendChild(li);

        // published article
        const article = document.createElement('article');
        li.appendChild(article);

        const name = document.createElement('h4');
        name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        article.appendChild(name);

        const age = document.createElement('p');
        age.textContent = `Age: ${ageInput.value}`;
        article.appendChild(age);

        const title = document.createElement('p');
        title.textContent = `Title: ${storyTitleInput.value}`;
        article.appendChild(title);

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${genreInput.value}`;
        article.appendChild(genre);

        const story = document.createElement('p');
        story.textContent = `${storyInput.value}`;
        article.appendChild(story);

        // buttons
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = "Save Story";
        li.appendChild(saveBtn);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = "Edit Story";
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.textContent = 'Delete Story';
        li.appendChild(deleteBtn);

        const firstNameEdit = firstNameInput.value;
        const lastNameEdit = lastNameInput.value;
        const ageEdit = ageInput.value;
        const storyTitleEdit = storyTitleInput.value;
        const genreEdit = genreInput.value;
        const storyEdit = storyInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
        storyTitleInput.value = '';
        // genreInput.value = '';
        storyInput.value = '';

        editBtn.addEventListener('click', edit);
        deleteBtn.addEventListener('click', del);
        saveBtn.addEventListener('click', save);

        function edit() {
            li.remove();

            publishBtn.disabled = false;

            firstNameInput.value = firstNameEdit;
            lastNameInput.value = lastNameEdit;
            ageInput.value = ageEdit;
            storyTitleInput.value = storyTitleEdit;
            genreInput.value = genreEdit;
            storyInput.value = storyEdit;
        }

        function del() {
            li.remove();

            publishBtn.disabled = false;
        }

        function save() {
            const toDelete = Array.from(main.children);
            toDelete.forEach(el => el.remove());

            const h1 = document.createElement('h1');
            h1.textContent = "Your scary story is saved!";
            main.appendChild(h1);
        }
    }


}
