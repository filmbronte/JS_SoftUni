function addAndRemove(array) {
    let result = [];
    let num = 0;
    for (const el of array) {
        if (el == 'add') {
            num++;
            result.push(num);
        } else if (el == 'remove') {
            num++;
            result.pop();
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemove(['add',
    'add',
    'add',
    'add'])

addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add'])

addAndRemove(['remove',
    'remove',
    'remove'])