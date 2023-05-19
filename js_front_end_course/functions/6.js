function signCheck(num1, num2, num3) {
    let count = 0;
    let nums = [num1, num2, num3];
    for (const num of nums) {
        if (num < 0) {
            count++;
        }
    }
    if (count % 2 === 0) {
        console.log('Positive');
    }
    else {
        console.log('Negative')
    }
}

signCheck(6, 12, 14);