let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk() {
        return 'beep beep'
    }
};

// Convert object to JSON
let jsonCar = JSON.stringify(car);

// console.log(jsonCar);

// Convert JSON to object
let parsedCar = JSON.parse(jsonCar);

// console.log(parsedCar);

//create deep copy if obj doesnt have functions
let newCar = JSON.parse(JSON.stringify(car));
console.log(newCar);

newCar.color = 'red';
console.log(car)
console.log(newCar)

// another way to deep copy
let { ...newC } = car;
console.log(newC)
newC.power = 2000;
console.log(newC)
console.log(car)