class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    /**
     * @param {number} r
     */
    set diameter(r) {
        this.radius = r / 2;
    }

    get diameter() {
        return `${this.radius * 2}`;
    }

    get area() {
        const result = this.radius ** 2 * Math.PI;
        return result;
    }

}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);