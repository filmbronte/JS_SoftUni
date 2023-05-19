function printEveryNth(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array[i]);
    }
    return result;
}

printEveryNth(['5',
    '20',
    '31',
    '4',
    '20'],
    2)

printEveryNth(['dsa',
    'asd',
    'test',
    'tset'],
    2)

printEveryNth(['1',
    '2',
    '3',
    '4',
    '5'],
    6)