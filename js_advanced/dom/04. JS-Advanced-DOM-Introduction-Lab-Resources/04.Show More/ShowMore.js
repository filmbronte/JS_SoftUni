function showText() {
    let more = document.getElementById('more');
    more.style.display = 'none';

    let text = document.getElementById('text');
    text.style.display = 'inline';

    let less = document.getElementById('less');
    less.style.display = 'inline';
}

function hideText() {
    let less = document.getElementById('less');
    less.style.display = 'none';

    let text = document.getElementById('text');
    text.style.display = 'none';

    let more = document.getElementById('more');
    more.style.display = 'inline';
}