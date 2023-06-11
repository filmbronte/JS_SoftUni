function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const commands = {
        restock,
        prepare,
        report,
    }

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            fat: 10,
            carbohydrate: 10,
            flavour: 10,
        },
    };

    return manager;

    function manager(input) {
        const [command, param, qty] = input.split(' ');
        return commands[command](param, qty);
    }

    function restock(type, qty) {
        stock[type] += Number(qty);
        return 'Success';
    }

    function prepare(recipeAsStr, qty) {
        qty = Number(qty);
        const recipe = Object.entries(recipes[recipeAsStr]);

        recipe.forEach(ingredient => ingredient[1] *= qty);

        for (let [ingredient, quantity] of recipe) {
            if (stock[ingredient] < quantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }
        recipe.forEach(([ingredient, quantity]) => stock[ingredient] -= quantity);

        return 'Success';
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
console.log(manager("report"));
