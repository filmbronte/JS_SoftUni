function smallestTwoNums(array) {
    let result = [];
    let num = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] === Math.min(...array)) {
            num = array.splice(i, 1);
            result.push(...num);
            break;
        }
    }
    for (let i=0; i<array.length; i++) {
        if (array[i] === Math.min(...array)) {
            num = array.splice(i, 1);
            result.push(...num);
            break;
        }
    }
    // console.log(num)
    console.log(result.join(" "))
    // console.log(array)
}

function solve(array) {
    array.sort((a, b) => a-b);
    let result = array.slice(0, 2);

    console.log(result.join(" "));
    
}

smallestTwoNums([30, 15, 50, 5])
smallestTwoNums([3, 0, 10, 4, 7, 3])

solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])