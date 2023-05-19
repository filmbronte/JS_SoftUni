function magicMatrices(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let eachArr = array[i];
        let reducer = (a, b) => a + b;
        let a = eachArr.reduce(reducer)
        console.log(a)

        for (let j = 0; j < eachArr.length; j++) {

        }
    }
    // console.log(sum)
}

magicMatrices([[1, 2, 3],
[2, 2, 2],
[1, 1, 1]]);