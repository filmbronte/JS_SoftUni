function sortingNums(array) {
    let result = array.sort((a, b) => { return b - a; });

    for (let i = 0; i < result.length; i += 2) {
        let num = result.pop();
        result.splice(i, 0, num)
    }

    return result;
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
