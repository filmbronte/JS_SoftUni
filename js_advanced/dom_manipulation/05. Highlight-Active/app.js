function focused() {
    const input = document.querySelectorAll('input');

    for (let box of input) {
        box.addEventListener('focus', () => {
            box.parentElement.className = 'focused';
        });

        // could be done with 'event.target'
        box.addEventListener('blur', (event) => {
            event.target.parentElement.className = '';
        });
    }
}