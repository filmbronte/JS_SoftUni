function storeCatalogue(array) {
    const result = array.sort((a, b) => a.localeCompare(b));
    let char = '';

    for (let el of result) {
        let [product, price] = el.split(' : ');
        const firstLetter = product[0];
        if (firstLetter !== char) {
            console.log(firstLetter);
        }
        console.log(`  ${product}: ${price}`);
        char = firstLetter;
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
