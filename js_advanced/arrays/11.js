function equalNeighbours(array) {
    let result = 0;
    let index = 0;
 
    for (let i=0; i<array.length; i++) {
        let eachArr = array[i];

        for (let j=0; j<eachArr.length; j++) {
            if (i - 1 >= 0 && array[i][j] == array[i-1][j]) {
                result++;
            }

            if (j - 1 >= 0 && array[i][j] == array[i][j-1]){
                result++;
            }
        }
    }
    return result;
}

// equalNeighbours([[1, 2, 3],
//                  [2, 2, 4],
//                  [6, 6, 4]])

equalNeighbours([[2, 3, 4, 7, 0],
                 [4, 0, 5, 3, 4],
                 [2, 3, 5, 4, 2],
                 [9, 8, 7, 5, 4]])