function colorize() {
    let rows = Array.from(document.querySelectorAll('tr:nth-child(2n)'));

    // for (let i = 1; i < rows.length; i += 2) {
    //     rows[i].style.background = 'teal';
    // }
    let result = rows.forEach(row => row.style.background = 'teal');
}