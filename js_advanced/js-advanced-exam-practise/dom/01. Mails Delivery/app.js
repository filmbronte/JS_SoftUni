function solve() {
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    const name = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');

    const listOfEmails = document.getElementById('list');
    const sendArea = document.getElementsByClassName('sent-list')[0];
    const deletedArea = document.getElementsByClassName('delete-list')[0];


    addBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);


    function add(e) {
        e.preventDefault();
        const li = document.createElement('li');

        if (name.value !== '' && title.value !== '' && message.value !== '') {
            listOfEmails.appendChild(li);
        }

        const listTitle = document.createElement('h4');
        listTitle.textContent = `Title: ${title.value}`;
        li.appendChild(listTitle);

        const listName = document.createElement('h4');
        listName.textContent = `Recipient Name: ${name.value}`;
        li.appendChild(listName);

        const msgName = document.createElement('span');
        msgName.textContent = `${message.value}`;
        li.appendChild(msgName);

        const div = document.createElement('div');
        div.setAttribute('id', 'list-action');
        li.appendChild(div);

        const sendButton = document.createElement('button');
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'send');
        sendButton.textContent = 'Send';
        div.appendChild(sendButton);

        const delButton = document.createElement('button');
        delButton.setAttribute('type', 'submit');
        delButton.setAttribute('id', 'delete');
        delButton.textContent = 'Delete';
        div.appendChild(delButton);

        sendButton.addEventListener('click', send);
        delButton.addEventListener('click', del);

        const sendName = name.value;
        const sendTitle = title.value;

        name.value = '';
        title.value = '';
        message.value = '';

        function send(e) {

            const li = document.createElement('li');
            sendArea.appendChild(li);

            const toSpan = document.createElement('span');
            toSpan.textContent = `To: ${sendName}`;
            li.appendChild(toSpan);

            const titleSpan = document.createElement('span');
            titleSpan.textContent = `Title: ${sendTitle}`;
            li.appendChild(titleSpan);

            const div = document.createElement('div');
            div.setAttribute('class', 'btn');
            li.appendChild(div);

            const delButton = document.createElement('button');
            delButton.setAttribute('type', 'submit');
            delButton.setAttribute('class', 'delete');
            delButton.textContent = 'Delete';
            div.appendChild(delButton);

            delButton.addEventListener('click', del);


            e.target.parentNode.parentNode.remove();
        }

        function del(e) {
            const li = document.createElement('li');
            deletedArea.appendChild(li);

            const toSpan = document.createElement('span');
            toSpan.textContent = `To: ${sendName}`;
            li.appendChild(toSpan);

            const titleSpan = document.createElement('span');
            titleSpan.textContent = `Title: ${sendTitle}`;
            li.appendChild(titleSpan);


            e.target.parentNode.parentNode.remove();
        }
    }
    function reset(e) {
        e.preventDefault();
        name.value = '';
        title.value = '';
        message.value = '';
    }
}
solve();