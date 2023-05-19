function city(city) {
    // let keys = Object.keys(city);
    // for (const key of keys) {
    //     console.log(`${key} -> ${city[key]}`);
    // }
    // object = {
    //     name,
    //     area,
    //     population,
    //     country,
    //     postcode
    // };
    const tuples = Object.entries(city)
         .forEach(([key, value]) => console.log(`${key} -> ${value}`));
}

city(
    {
    name: 'Sofia',
    area: 492,
    population: 1234567,
    country: 'Bulgaria',
    postcode:4000
    }
)