function city(obj) {
    // for (const key in obj) {
    //     console.log(`${key} -> ${obj[key]}`);
    // };
    for (const el of Object.entries(obj)) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

city({

    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",

    postCode: "4000"

});
