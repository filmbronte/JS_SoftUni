function sortArray(array, arg) {
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
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));