function biggestNum(array) {
    let result = [];
    for (let i=0; i<array.length; i++) {
        let eachArr = array[i];
        result.push(Math.max(...eachArr));
    }
    console.log(Math.max(...result));
}

biggestNum([[20, 50, 10],
    [8, 33, 145]]);

biggestNum([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);