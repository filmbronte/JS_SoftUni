function focused() {
    const parent = document.querySelector('div');

    parent.addEventListener('focusin', onFocus);
    parent.addEventListener('focusout', onBlur);

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }
}



// without delegation


// function focused() {
//     const input = document.querySelectorAll('input');

//     for (let box of input) {
//         box.addEventListener('focus', () => {
//             box.parentElement.className = 'focused';
//         });

//         // could be done with 'event.target'
//         box.addEventListener('blur', (event) => {
//             event.target.parentElement.className = '';
//         });
//     }
// }