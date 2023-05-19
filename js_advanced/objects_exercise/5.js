function lowestPrice(arr) {
    const obj = {};

    for (const line of arr) {
        const [town, product, price] = line.split(' | ');

        if (!obj[product]) {
            obj[product] = {};
        }

        obj[product][town] = Number(price);
    }

    for (const [product, towns] of Object.entries(obj)) {
        const sorted = Object.entries(towns).sort((a, b) => { return a[1] - b[1]; });

        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);