// not finished
class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || !(Number.isInteger(horsepower) && horsepower >= 0) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(c => c.model == model);
        const match = this.availableCars[index];

        const difference = this.availableCars[index].mileage - desiredMileage;

        if (!match) {
            throw new Error(`${model} was not found!`);
        }

        const sold = {
            model: match.model,
            horsepower: match.horsepower
        };


        if (match.mileage <= desiredMileage) {
            sold.soldPrice = match.price;
        } else if (difference <= 40000) {
            sold.soldPrice = match.price * 0.95;
        } else if (difference > 40000) {
            sold.soldPrice = match.price * 0.9;
        }

        this.soldCars.push(sold);
        this.availableCars.splice(index, 1);
        this.totalIncome += sold.soldPrice;

        return `${sold.model} was sold for ${sold.soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length > 0) {
            const result = ['-Available cars:'];

            this.availableCars.forEach((car) => {
                result.push(
                    `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`
                );
            });

            return result.join('\n');

        } else {
            return "There are no available cars";
        }

    }

    salesReport(criteria) {
        if (criteria == 'horsepower') {
            const allCars = this.soldCars.filter(
                (car) => car[criteria]
            );
            const sortedCars = allCars.sort((a, b) =>
                b.horsepower - a.horsepower
            );

            const result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`];

            sortedCars.forEach(el => {
                result.push(`---${el.model} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$`);
            });

            return result.join('\n');


        } else if (criteria == 'model') {
            const allCars = this.soldCars.filter((car) => {
                car.model === criteria;
            });

            const sortedCars = allCars.sort((a, b) => {
                a.model.localCompare(b.model);
            });

            const result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`];

            sortedCars.forEach(el => {
                result.push(`---${el.model} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$`);
            });

            return result.join('\n');

        } else {
            throw new Error("Invalid criteria!");
        }

    }
}

// let dealership = new CarDealership('SoftAuto');

// console.log(dealership.addCar('Toyota Corolla', 100, 3500,

//     190000));

// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));

// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');

// dealership.addCar('Toyota Corolla', 100, 3500, 190000);

// dealership.addCar('Mercedes C63', 300, 29000, 187000);

// dealership.addCar('Audi A3', 120, 4900, 240000);

// console.log(dealership.sellCar('Toyota Corolla', 230000));

// console.log(dealership.sellCar('Mercedes C63', 110000)); 


// let dealership = new CarDealership('SoftAuto');

// // dealership.addCar('Toyota Corolla', 100, 3500, 190000);

// // dealership.addCar('Mercedes C63', 300, 29000, 187000);

// // dealership.addCar('Audi A3', 120, 4900, 240000);

// console.log(dealership.currentCar()); 

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);

dealership.addCar('Mercedes C63', 300, 29000, 187000);

dealership.addCar('Audi A3', 120, 4900, 240000);

dealership.sellCar('Toyota Corolla', 230000);

dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('horsepower'));