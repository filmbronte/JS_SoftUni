function printAndSum(a, b) {
    let sum = 0;
    let oneLine = '';
    for (let i = a; i<=b; i++) {
        sum += i;
        oneLine += i + ' ';
    }
    console.log(oneLine);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);