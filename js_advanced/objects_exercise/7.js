function solve(array) {
    const result = {
        Town: null,
        Latitude: null,
        Longitude: null,
    };

    for (let arr of array) {
        const data = arr.split('|');
        result.Town = data[1];
        result.Latitude = Number(data[2]).toFixed(2);
        result.Longitude = Number(data[3]).toFixed(2);
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);