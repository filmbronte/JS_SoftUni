function roadRadar(speed, area) {
    if(area === 'motorway') {
        let limit = 130;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let difference = speed - limit;
            let status = '';
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else if (difference > 41) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    else if(area === 'interstate') {
        let limit = 90;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = '';
            if (difference <= 20) {
                status = 'speeding';
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
            }
            else if (difference > 41) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    else if(area === 'city') {
        let limit = 50;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = '';
            if (difference <= 20) {
                status = 'speeding';
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
            }
            else if (difference > 41) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    else if(area === 'residential') {
        let limit = 20;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else {
            let difference = speed - limit;
            let status = '';
            if (difference <= 20) {
                status = 'speeding';
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
            }
            else if (difference > 41) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}

roadRadar(200, 'motorway')