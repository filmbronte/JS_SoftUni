function calorieObject(array) {
    const result = {};
    for (let i = 0; i < array.length; i += 2) {
        // const product = array[i];
        // const calories = Number(array[i + 1]);

        result[array[i]] = Number(array[i + 1]);
    }
    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);