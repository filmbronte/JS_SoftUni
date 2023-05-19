function sameNums(num) {
    let myFunc = num => Number(num);
    let array = Array.from(String(num), myFunc);
    let isSame = true;
    let sum = 0;

    for (let i=0; i < array.length; i++) {
        const current = array[i];
        sum += Number(current);

        if (array[0] !== current) {
            isSame = false;
        }
    }
    if (isSame == true) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}


sameNums(2222222);