function townPopulation(array) {
    const result = {};
    for (let i = 0; i < array.length; i++) {
        const [town, population] = array[i].split(" <-> "); // tokenization
        if (town in result == false) {
            result[town] = 0;
        };

        result[town] += Number(population);
    }
    // for (const key in result) {
    //     console.log(`${key} : ${result[key]}`)
    // }

    // eslint-disable-next-line no-unused-vars
    const printResult = Object.entries(result)
        .forEach(([key, value]) => console.log(`${key} -> ${value}`));

    // console.log(Object
    //     .entries(result)
    //     .map(([town, population]) => `${town} : ${population}`)
    //     .join('\n'));
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);

console.log('------------------');

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

