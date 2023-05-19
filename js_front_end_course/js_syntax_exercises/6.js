function sumDigits(number) {
    let sum = 0;
    let numberAsString = number.toString(); // in order to make .split work, turn num to str
    for (const el of numberAsString) {
        let num = Number(el);
        sum += num;
    }
    console.log(sum);
}
sumDigits(245678);
