function gcd(num1, num2) {
    let divisor1 = [];
    let divisor2 = [];
    
    for (let i=0; i<=num1; i++) {
        if (num1 % i === 0) {
            divisor1.push(i);
        }
    }

    for (let i=0; i <= num2; i++) {
        if (num2 % i === 0) {
            divisor2.push(i);
        }
    }
    let common = divisor1.filter(n => divisor2.includes(n))
    // console.log(divisor1);
    // console.log(divisor2);
    // console.log(common);
    console.log(Math.max(...common));
}

gcd(15, 5)
gcd(2154, 458)