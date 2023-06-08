function carFactory(input) {
    const obj = { ...input };
    const result = {
        model: obj.model,
        engine: {},
        carriage: {},
        wheels: [0, 0, 0, 0],
    };

    if (obj.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    } else if (obj.power <= 120 && obj.power > 90) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    } else {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }

    if (obj.carriage == 'hatchback') {
        result.carriage.type = obj.carriage;
        result.carriage.color = obj.color;
    } else if (obj.carriage == 'coupe') {
        result.carriage.type = obj.carriage;
        result.carriage.color = obj.color;
    }

    if (obj.wheelsize % 2 == 0) {
        obj.wheelsize--;
    }
    result.wheels.fill(obj.wheelsize);

    return result;
}


const result = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

console.log(result);