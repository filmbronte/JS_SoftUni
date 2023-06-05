function argInfo(...input) {
    const occurances = {
        string: 0,
        number: 0,
        function: 0.
    };
    const sorted = [];

    for (let el of input) {
        console.log(`${typeof el}: ${el}`);
        occurances[typeof el]++;
    }

    for (let type in occurances) {
        sorted.push([type, occurances[type]]);
    }

    sorted.sort((a, b) => {
        return b[1] - a[1];
    });


    for (let occ of sorted) {
        console.log(`${occ[0]} = ${occ[1]}`);
    }

}

argInfo('cat', 42, function () { console.log('Hello world!'); });