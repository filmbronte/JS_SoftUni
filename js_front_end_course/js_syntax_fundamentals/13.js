function evenAndOddSubtraction(array) {
    let oddSum = 0;
    let evenSum = 0;
    let even = array.filter((num) => num % 2 === 0);
    let odd = array.filter((num) => num % 2 === 1);
    for (const el of even) {
        evenSum += el;
    }
    for (const el of odd) {
        oddSum += el;
    }
    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([3,5,7,9]);