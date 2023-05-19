function order(product, quantity) {
     if (product === 'coffee') {
        let price = quantity * 1.50;
        console.log(price.toFixed(2));
    }
     else if (product === 'water') {
        let price = quantity * 1.00;
        console.log(price.toFixed(2));
    }
     else if (product === 'coke') {
         let price = quantity * 1.40;
         console.log(price.toFixed(2));
     }
     else if (product === 'snacks') {
         let price = quantity * 2.00;
         console.log(price.toFixed(2));
     }
}