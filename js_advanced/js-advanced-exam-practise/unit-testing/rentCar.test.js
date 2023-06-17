const { expect } = require('chai');
const rentCar = require('./rentCar');

describe("Rent car", () => {
    describe("search car", () => {
        it("input validation", () => {
            expect(() => rentCar.searchCar(3, '')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar('', '')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar({}, '')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar()).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar([])).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar([], 6)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar([], [])).to.throw(Error, "Invalid input!");
            expect(() => rentCar.searchCar([], {})).to.throw(Error, "Invalid input!");
        });

        it('returns correct res if model is in array', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 'Audi')).to.equal('There is 2 car of model Audi in the catalog!');
        });

        it('returns correct res if no cars in array', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Tesla')).to.throw(Error, 'There are no such models in the catalog!');
        });
    });

    describe("calculate price of car", () => {
        it('input validation', () => {
            expect(() => rentCar.calculatePriceOfCar('', '')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar('', [])).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar('', {})).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar('', 4.5)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar([], 9)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar({}, 9)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar(0, 9)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar('')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.calculatePriceOfCar()).to.throw(Error, "Invalid input!");
        });

        it('throws error if no such car in catelog', () => {
            expect(() => rentCar.calculatePriceOfCar('Tesla', 5)).throw(Error, "No such model in the catalog!");
        });

        it('returns correct output', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 5)).to.equal('You choose Toyota and it will cost $200!');
        })
    });

    describe('check budget', () => {
        it('input validation', () => {
            expect(() => rentCar.checkBudget(4.5, 3, 3)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(4.5, 3.5, 3)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(4, 3.5, 3)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(4, 3.5, 3.5)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(4, 3, 3.5)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget('', 3, 3.5)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(6, '', 3.5)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(6, 8, '')).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(6, 8, [])).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(6, [], 7)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget([], 9, 7)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget({}, 9, 7)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(9, {}, 7)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(9, 6, {})).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(9, 6)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget(9)).to.throw(Error, "Invalid input!");
            expect(() => rentCar.checkBudget()).to.throw(Error, "Invalid input!");
        });

        it("if budget >= cost", () => {
            expect(rentCar.checkBudget(10, 5, 50)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 5, 100)).to.equal('You rent a car!');
        });

        it('if budget < cost', () => {
            expect(rentCar.checkBudget(10, 5, 30)).to.equal('You need a bigger budget!');
        })
    });
});