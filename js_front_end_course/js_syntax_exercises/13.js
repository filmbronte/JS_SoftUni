function arrayRotation(array, rotation){
    rotation %= array.length;

    for (let i=0 ; i < rotation ; i++) {
        let firstNum = array.shift();
        array.push(firstNum);
    }

    console.log(array.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2)