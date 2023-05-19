function diagonalSums(array) {
    let mainIndex = 0;
    let secondaryIndex = array.length - 1;

    let mainSum = 0;
    let secondSum = 0;

    for (let row=0; row<array.length; row++) {
        mainSum += array[row][mainIndex];
        secondSum += array[row][secondaryIndex];

        mainIndex++;
        secondaryIndex--;
    }

    console.log(mainSum + " " + secondSum);
}

diagonalSums([[20, 40],
              [10, 60]])

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]])
