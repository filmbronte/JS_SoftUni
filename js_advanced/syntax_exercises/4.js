function previousDay(num1, num2, num3) {
    let result = new Date(num1, num2-1, num3);
    result.setDate(result.getDate() - 1);

    console.log(`${result.getFullYear()}-${result.getMonth()+1}-${result.getDate()}`)
}

previousDay(2016, 9, 30)
previousDay(2015, 5, 10)
previousDay(2001, 1, 1)