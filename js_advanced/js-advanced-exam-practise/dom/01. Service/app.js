window.addEventListener("load", solve);

function solve() {
    const sendFormBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];

    const recievedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    const typeProductInput = document.getElementById('type-product');
    const descriptionInput = document.getElementById('description');
    const nameInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');

    sendFormBtn.addEventListener('click', send);
    clearBtn.addEventListener('click', clear);

    function send(e) {
        e.preventDefault();

        const div = document.createElement('div');
        div.setAttribute('class', 'container');

        if (descriptionInput.value != '' && nameInput.value != '' && phoneInput.value != '') {
            recievedOrders.appendChild(div);
        }

        const h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeProductInput.value}`;
        div.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.textContent = `Client information: ${nameInput.value}, ${phoneInput.value}`;
        div.appendChild(h3);

        const h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionInput.value}`;
        div.appendChild(h4);

        const startBtn = document.createElement('button');
        startBtn.setAttribute('class', 'start-btn');
        startBtn.textContent = "Start repair";
        div.appendChild(startBtn);

        const finishBtn = document.createElement('button');
        finishBtn.setAttribute('class', 'finish-btn');
        finishBtn.textContent = "Finish repair";
        finishBtn.disabled = true;
        div.appendChild(finishBtn);

        startBtn.addEventListener('click', startRepair);
        finishBtn.addEventListener('click', finishRepair);

        const typeProduct = typeProductInput.value;
        const description = descriptionInput.value;
        const name = nameInput.value;
        const phone = phoneInput.value;

        descriptionInput.value = '';
        nameInput.value = '';
        phoneInput.value = '';

        function startRepair() {
            finishBtn.disabled = false;
            startBtn.disabled = true;
        }

        function finishRepair() {
            div.remove();

            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'container');
            completedOrders.appendChild(newDiv);

            const newh2 = document.createElement('h2');
            newh2.textContent = `Product type for repair: ${typeProduct}`;
            newDiv.appendChild(newh2);

            const newh3 = document.createElement('h3');
            newh3.textContent = `Client information: ${name}, ${phone}`;
            newDiv.appendChild(newh3);

            const newh4 = document.createElement('h4');
            newh4.textContent = `Description of the problem: ${description}`;
            newDiv.appendChild(newh4);
        }
    }

    function clear() {
        const ordersToClear = Array.from(completedOrders.getElementsByClassName('container'));

        ordersToClear.forEach(order => order.remove());
    }
}