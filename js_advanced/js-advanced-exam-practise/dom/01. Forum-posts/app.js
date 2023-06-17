window.addEventListener("load", solve);

//TODO
function solve() {
    const titleInput = document.getElementById('post-title');
    const categoryInput = document.getElementById('post-category');
    const contentInput = document.getElementById('post-content');

    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');

    const publishBtn = document.getElementById('publish-btn');
    const clearBtn = document.getElementById('clear-btn');

    publishBtn.addEventListener('click', publish);
    clearBtn.addEventListener('click', clear);

    function publish() {
        const li = document.createElement('li');
        li.setAttribute('class', 'rpost');

        if (titleInput.value !== '' && categoryInput.value !== '' && contentInput.value != '') {
            reviewList.appendChild(li);
        }

        const article = document.createElement('article');
        li.appendChild(article);

        const h4 = document.createElement('h4');
        h4.textContent = titleInput.value;
        article.appendChild(h4);

        const category = document.createElement('p');
        category.textContent = `Category: ${categoryInput.value}`;
        article.appendChild(category);

        const content = document.createElement('p');
        content.textContent = `Content: ${contentInput.value}`;
        article.appendChild(content);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('class', 'action-btn edit');

        const approveBtn = document.createElement('button');
        approveBtn.textContent = 'Approve';
        approveBtn.setAttribute('class', 'action-btn approve');

        li.appendChild(approveBtn);
        li.appendChild(editBtn);

        editBtn.addEventListener('click', edit);
        approveBtn.addEventListener('click', approve);

        const titleEdit = titleInput.value;
        const categoryEdit = categoryInput.value;
        const contentEdit = contentInput.value;

        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';

        function edit() {

            titleInput.value = titleEdit;
            categoryInput.value = categoryEdit;
            contentInput.value = contentEdit;

            li.remove();
        }

        function approve() {

            li.remove();

            const newli = document.createElement('li');
            newli.setAttribute('class', 'rpost');
            publishedList.appendChild(newli);

            const newArticle = document.createElement('article');
            newli.appendChild(newArticle);

            const newh4 = document.createElement('h4');
            newh4.textContent = titleEdit;
            newArticle.appendChild(newh4);

            const newCategory = document.createElement('p');
            newCategory.textContent = `Category: ${categoryEdit}`;
            newArticle.appendChild(newCategory);

            const newContent = document.createElement('p');
            newContent.textContent = `Content: ${contentEdit}`;
            newArticle.appendChild(newContent);
        }
    }

    function clear() {
        const publishedToClear = Array.from(publishedList.children);
        publishedToClear.forEach(el => el.remove());
    }

}