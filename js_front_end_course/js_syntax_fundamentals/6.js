function minMax(a, b, c) {
    if (a > b && a > c) {
        console.log(`The largest number is ${a}.`);
    }
    else if (b > a && b > c) {
        console.log(`The largest number is ${b}.`);
    }
    if (c > b && c > a) {
        console.log(`The largest number is ${c}.`);
    }
}

minMax(9, 4, 2);