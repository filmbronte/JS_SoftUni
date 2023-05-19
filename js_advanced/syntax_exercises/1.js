function fruit(string, grams, price) {
  let weight = 0.001 * grams;
  let finalPrice = price * weight;
  console.log(`I need $${finalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${string}.`);
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
