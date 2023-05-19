function extractIncreasingSubset(array) {
    let max = 0;
    // let result = [];

    // for (const el of array) {
    //     if (el >= max) {
    //         max = el;
    //         result.push(max);
    //     }
    // }
    // return result;

    const output = array.reduce((acc, curr) => {
        if (curr >= max) {
            max = curr;
            const temp = acc;
            temp.push(curr);
            return temp;
        }

        return acc;

    }, []);

    console.log(output)
}

extractIncreasingSubset([1, 3, 8, 4, 10,
    12,
    3,
    2,
    24])