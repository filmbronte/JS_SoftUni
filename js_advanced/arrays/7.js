function pieceOfPie(array, string1, string2) {
    // let result = [];
    // let index1 = 0;
    // let index2 = 0;

    // for (let i=0; i<array.length; i++) {
    //     if (string1 === array[i]) {
    //         index1 = i;
    //     }
    //     if (string2 === array[i]) {
    //         index2 = i;
    //     }
    // }
    // result = array.slice(index1, index2+1)
    // return result;

    const index1 = array.indexOf(string1);
    const index2 = array.indexOf(string2);

    return array.slice(index1, index2 + 1)
}

pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 
    'Key Lime Pie',
'    Lemon Meringue Pie')

pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 
     'Pot Pie', 
    'Smoked Fish Pie')