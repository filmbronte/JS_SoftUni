function sumOfNumbers(a, b) {
  let sum = 0;
  a = Number(a);
  b = Number(b);

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");
