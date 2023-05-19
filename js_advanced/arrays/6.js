function biggerHalf(array) {
    array.sort((a, b) => a-b);
    let half = Math.floor(array.length/2);
    let num = 0;
    let result = [];

    if (array.length % 2 === 0) {
        for (let i=0; i<=array.length; i++) {
             if (i === half) {
                num = array.splice(i, )
                result.push(...num);
                break;
            }
        }
    } 
    else if (array.length % 2 !== 0) {
        for (let i=0; i<= array.length; i++) {
            if (i === half) {
                num = array.splice(i, )
                result.push(...num);
                break;
            }
        }
    }
    return result;
}

function solve(array) {
    array.sort((a, b) => a-b);
    let half = Math.floor(array.length/2);
    let result = [];

    for (let i=half; i<array.length; i++) {
        result.push(array[i]);
    }
    return result;
}

function solve2(array) {
    array.sort((a, b) => a-b);
    let half = Math.floor(array.length/2);
    let result = array.splice(half, array.length)
    
    return result;
}



// biggerHalf([4, 7, 2, 5])
// biggerHalf([3, 19, 14, 7, 2, 19, 6])

solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])