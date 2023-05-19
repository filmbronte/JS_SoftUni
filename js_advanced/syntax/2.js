function stringLength(one, two, three) {
  const sumLength = one.length + two.length + three.length;
  const avgLength = (one.length + two.length + three.length) / 3;
  console.log(sumLength);
  console.log(avgLength.toFixed());
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
