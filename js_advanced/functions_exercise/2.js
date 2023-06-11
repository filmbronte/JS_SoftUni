function argInfo(...input) {
    const occurances = {};

    const sorted = [];

    for (let el of input) {
        const type = typeof el;
        console.log(`${type}: ${el}`);

        if (!occurances[type]) {
            occurances[type] = 0;
        }
        occurances[type]++;
    }

    for (let type in occurances) {
        sorted.push([type, Number(occurances[type])]);
    }

    sorted.sort((a, b) => {
        return b[1] - a[1];
    });


    for (let occ of sorted) {
        if (occ[1] !== 0) {
            console.log(`${occ[0]} = ${occ[1]}`);

        }
    }

}

argInfo('cat', 42, function () { console.log('Hello world!'); });