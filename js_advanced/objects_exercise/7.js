function solve(array) {
    const result = {
        Town: null,
        Latitude: null,
        Longitude: null,
    };

    const result2 = [];

    for (let i = 1; i < array.length; i++) {
        const data = array[i].split('|');

        const town = data[1].slice(1, data[1].length - 1);
        const lat = Number(data[2].slice(1, data[2].length - 1)).toFixed(2);
        const long = Number(data[3].slice(1, data[3].length - 1)).toFixed(2);

        result.Town = town;
        result.Latitude = Number(lat);
        result.Longitude = Number(long);

        result2.push(JSON.parse(JSON.stringify(result)));

    }

    console.log(JSON.stringify(result2));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);