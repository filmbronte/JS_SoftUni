function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    num1 = Number(num1.value);
    num2 = Number(num2.value);

    let sumInput = document.getElementById('sum');
    let sum = num1 + num2;
    sumInput.value = sum;
}
