function cookingByNumbers(num, ...operations) {
    num = Number(num);
    operations
        .forEach((operations) => {
            switch (operations) {
                case 'chop':
                    num /= 2;
                    break;
                case 'dice':
                    num = Math.sqrt(num);
                    break;
                case 'spice':
                    num++;
                    break;
                case 'bake':
                    num *= 3;
                    break;
                case 'fillet':
                    num -= num * 0.2;
                    break;
            }
            console.log(num);
        });
}
