function deleteByEmail() {
    // const rows = document.querySelectorAll('#customers tbody tr');
    // const input = document.querySelector('input[name="email"]').value;
    // const result = document.getElementById('result');
    // let isDeleted = false;

    // const rowArr = Array.from(rows);

    // for (let row of rowArr) {
    //     const col = row.children[1];

    //     if (col.textContent == input) {
    //         row.remove();
    //         isDeleted = true;
    //     }


    //     if (isDeleted) {
    //         result.textContent = 'Deleted.';
    //     } else {
    //         result.textContent = 'Not found.';
    //     }
    // }

    //read input value
    const query = document.querySelector('input[name="email"]').value;

    //get all rows
    const rows = document.querySelectorAll('#customers tbody tr');
    const rowsArray = Array.from(rows);

    const match = rowsArray.find(row => row.children[1].textContent == query);

    if (match) {
        document.getElementById('result').textContent = 'Deleted.';
        match.remove();
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }


}