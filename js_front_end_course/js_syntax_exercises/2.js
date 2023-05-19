function vacation(people, type, day) {
    if (type === 'Students') {
        if (day === 'Friday') {
            let price = 8.45;
            if (people >= 30) {
                let reduction = price * 0.15;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${(price*people).toFixed(2)}`); }
        }
        else if (day === 'Saturday') {
            let price = 9.80;
            if (people >= 30) {
                let reduction = price * 0.15;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${(price*people).toFixed(2)}`); }
        }
        else if (day === 'Sunday') {
            let price = 10.46;
            if (people >= 30) {
                let reduction = price * 0.15;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${(price*people).toFixed(2)}`); }
        }
    }
    else if (type === 'Business') {
        if (day === 'Friday') {
            let price = 10.90;
            if (people >= 100) {
                let reduction = price * 0.15;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${((price*people)-10).toFixed(2)}`); }
        }
        else if (day === 'Saturday') {
            let price = 15.60;
            if (people >= 100) {
                let reduction = price * 0.15;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${((price*people)-10).toFixed(2)}`); }
        }
        else if (day === 'Sunday') {
            let price = 16;
            if (people >= 100) {
                let reduction = price * 0.15;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${((price*people)-10).toFixed(2)}`); }
        }
    }
    else if (type === 'Regular') {
        if (day === 'Friday') {
            let price = 15;
            if (people >= 10 && people <= 20) {
                let reduction = price * 0.5;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${(price*people).toFixed(2)}`); }
        }
        else if (day === 'Saturday') {
            let price = 20;
            if (people >= 10 && people <= 20) {
                let reduction = price * 0.5;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${(price*people).toFixed(2)}`); }
        }
        else if (day === 'Sunday') {
            let price = 22.50;
            if (people >= 10 && people <= 20) {
                let reduction = price * 0.5;
                console.log(`Total price: ${((price - reduction)*people).toFixed(2)}`);
            } else { console.log(`Total price: ${(price*people).toFixed(2)}`); }
        }
    }
}

vacation(40, 'Regular', 'Saturday');