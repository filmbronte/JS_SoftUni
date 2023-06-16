class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            });

            this.spaceAvailable -= spaceRequired;

            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {
        const index = this.plants.findIndex(p => p.plantName == plantName);
        const match = this.plants[index];

        if (match == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (match.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        match.ripe = true;
        match.quantity += quantity;

        if (match.quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if (match.quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        const index = this.plants.findIndex(p => p.plantName == plantName);
        const match = this.plants[index];

        if (match == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        const harvested = {
            plantName: match.plantName,
            quantity: match.quantity
        };

        if (match.ripe != true) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        } else {
            this.spaceAvailable += match.spaceRequired;
            this.storage.push(harvested);
            this.plants.splice(index, 1);

            return `The ${plantName} has been successfully harvested.`;
        }
    }

    generateReport() {
        const result = [`The garden has ${this.spaceAvailable} free space left.`];
        let plants = 'Plants in the garden: ';
        const garden = [];
        const storagePlants = [];

        const sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        sorted.forEach(plant => {
            garden.push(plant.plantName);
        });

        this.storage.forEach(plant => {
            storagePlants.push(`${plant.plantName} (${plant.quantity})`);
        });

        plants += garden.join(', ');
        result.push(plants);

        let storage = 'Plants in storage: ';
        if (this.storage.length == 0) {
            storage += 'The storage is empty.';
            result.push(storage);
        } else {
            storage += storagePlants.join(', ');
            result.push(storage);
        }

        return result.join('\n');
    }
}

// const myGarden = new Garden(250);

// console.log(myGarden.addPlant('apple', 20));

// console.log(myGarden.addPlant('orange', 200));

// console.log(myGarden.addPlant('olive', 50));


// const myGarden = new Garden(250)

// console.log(myGarden.addPlant('apple', 20));

// console.log(myGarden.addPlant('orange', 100));

// console.log(myGarden.addPlant('cucumber', 30));

// console.log(myGarden.ripenPlant('apple', 10));

// console.log(myGarden.ripenPlant('orange', 1));

// console.log(myGarden.ripenPlant('orange', 4)); 


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());