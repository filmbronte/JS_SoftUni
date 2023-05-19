function sortByCriteria(array) {

    first(array);
    second(array)

    function first(arr) {
        arr.sort((a, b) => {
            return a.localeCompare(b);
        });
    }

    function second(arr) {
        arr.sort((a, b) => {
            return a.length - b.length;
        });
    }

    console.log(array.join('\n'))
}

sortByCriteria(['alpha', 'beta', 'gamma'])

sortByCriteria(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George'])