function factorialDevision(a, b) {

    let result = factorial(a) / factorial(b)
    return result.toFixed(2);

    function factorial(n) {
        if (n === 1) {
            return 1;
        }
        else {
            return n * factorial(n - 1);
        }
    }
}

console.log(factorialDevision(5, 2));