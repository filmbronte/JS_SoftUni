function everyNth(array, num){
    let new_array = [];
    for (let i=0; i < array.length ; i += num) {
        new_array.push(array[i]);
    }
    console.log(new_array)
}

everyNth(['1', '2', '3', '4', '5'], 6)