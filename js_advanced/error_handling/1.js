function subSub(arr, startIdx, endIdx) {
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    const isNumeric = arr.every(element => {
        return typeof element === 'number';
    });

    if (isNumeric == false) {
        return NaN;
    }

    if (startIdx < 0) {
        startIdx = 0;
    }

    if (endIdx > arr.length - 1) {
        endIdx = arr.length - 1;
    }

    const result = arr.slice(startIdx, endIdx + 1).reduce((a, b) => a + b, 0);
    return result;
}

const result = subSub([], -3, 1);

console.log(result);