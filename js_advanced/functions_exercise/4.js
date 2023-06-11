function solution() {
    let ingedients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

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

    return function (input) {
        input = input.split(' ');

        if (input[0] == 'restock') {
            let microelement = input[1];
            let quantity = Number(input[2]);

            // if (!ingedients[microelement]) {
            //     ingedients[microelement] = 0;
            // }
            ingedients[microelement] += quantity;
        }

        if (input[0] == 'prepare') {
            let recipe = input[1];
            let quantity = input[2];

            if (recipe == 'lemonade') {
                if (ingedients['carbohydrate'] >= 10) {
                    ingedients['carbohydrate'] -= 10;
                } else {
                    return `Error: not enough carbohydrate in stock`;
                }
            }
        }
        return ingedients;
    };

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));