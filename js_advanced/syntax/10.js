function aggregateNums(array) {
  let sum = 0;
  let inverseSum = 0;
  let result = "";

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    inverseSum = inverseSum + 1 / array[i];
    result += array[i];
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(result);
}

aggregateNums([1, 2, 3]);
