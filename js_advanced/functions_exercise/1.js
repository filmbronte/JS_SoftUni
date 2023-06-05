function sortArray(array, arg) {

    const method = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    array.sort(method[arg]);

    return array;


    /*
    if (arg == 'asc') {
        array.sort((a, b) => {
            return a - b;
        });
        return array;
    } else if (arg == 'desc') {
        array.sort((a, b) => {
            return b - a;
        });
        return array;
    }
    */



    /* with ternary operator:

    return array.sort((a, b) => (arg == 'asc' ? a - b : b - a));

    */
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));