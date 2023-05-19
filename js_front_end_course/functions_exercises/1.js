function findMin(a, b, c) {
    let nums = [a, b, c];
    let minNum = Math.min(...nums);
    console.log(minNum);
}

findMin(3, 1, -9);