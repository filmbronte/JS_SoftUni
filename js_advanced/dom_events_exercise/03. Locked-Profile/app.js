function lockedProfile() {

    const buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.disabled = true;
        button.addEventListener('click', showMore);
    }

    function showMore(e) {
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        const hiddenField = Array
            .from(e.target.parentElement.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'));


        if (isActive) {
            if (e.target.textContent == "Show more") {
                hiddenField.style.display = 'block';
                e.target.textContent = "Hide it";

            } else if (e.target.textContent == 'Hide it') {
                hiddenField.style.display = '';
                e.target.textContent = "Show more";
            }
        }
    }

    /////////////////////////////////////////
    // Live Demo (button disable):


    const radio = Array.from(document.querySelectorAll('input[type="radio"]'));

    for (let input of radio) {
        input.addEventListener('click', onLockToggle);
    }

    function onLockToggle(e) {
        const button = e.target.parentElement.querySelector('button');

        if (e.target.value == 'lock') {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}   
