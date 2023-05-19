function simpleCalculator(a, b, operator) {
    switch (operator) {
        case 'multiply': const multiply = (x, y) => x * y; console.log(multiply(a, b)); break;
        case 'divide': const divide = (x, y) => x / y; console.log(divide(a, b)); break;
        case 'add': const add = (x, y) => x + y; console.log(add(a, b)); break;
        case 'subtract': const subtract = (x, y) => x - y; console.log(subtract(a, b)); break;
    }
}

simpleCalculator(5, 5, 'subtract');