function fruit(fruitType, weightGrams, pricePerKilo) {
    let weightKilo = weightGrams * 0.001;
    let overallPrice = weightKilo * pricePerKilo;
    console.log(`I need $${overallPrice.toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);