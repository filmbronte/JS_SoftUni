const { expect } = require('chai');
const chooseYourCar = require('./chooseYourCar');

describe("Choose Your Car", () => {
    describe("Choosing type", () => {
        it("throws error if year is < 1900 and > 2022", () => {
            const func1 = () => chooseYourCar.choosingType('test', 'red', 1899);
            const func2 = () => chooseYourCar.choosingType('test', 'red', 2033);

            expect(func1).to.throw(Error, 'Invalid Year!');
            expect(func2).to.throw(Error, 'Invalid Year!');
        });
        it('throws error if car is not Sedan', () => {
            const func1 = () => chooseYourCar.choosingType('not sedan', 'red', 2006);

            expect(func1).to.throw(Error, "This type of car is not what you are looking for.");
        })
        it('returns correct if car year >= 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2010)).to.equal(`This Red Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2015)).to.equal(`This Red Sedan meets the requirements, that you have.`);
        });
        it('returns correct if car year < 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2009)).to.equal("This Sedan is too old for you, especially with that Red color.");
        });
    });

    describe('brand name', () => {
        const brands = ["BMW", "Toyota", "Peugeot"];

        it('input validation', () => {
            const func1 = () => chooseYourCar.brandName('', 6);
            const func2 = () => chooseYourCar.brandName(1, 6);
            const func3 = () => chooseYourCar.brandName({}, 6);
            const func4 = () => chooseYourCar.brandName(undefined, 6);
            const func5 = () => chooseYourCar.brandName(null, 6);

            const func6 = () => chooseYourCar.brandName(brands, 3);
            const func7 = () => chooseYourCar.brandName(brands, '1');
            const func8 = () => chooseYourCar.brandName(brands, []);
            const func9 = () => chooseYourCar.brandName(brands, {});
            const func10 = () => chooseYourCar.brandName(brands, undefined);
            const func11 = () => chooseYourCar.brandName(brands, null);
            const func12 = () => chooseYourCar.brandName(brands, 2.5);
            const func13 = () => chooseYourCar.brandName(brands);
            const func14 = () => chooseYourCar.brandName();
            const func15 = () => chooseYourCar.brandName(brands, -8);

            expect(func1).to.throw('Invalid Information!');
            expect(func2).to.throw('Invalid Information!');
            expect(func3).to.throw('Invalid Information!');
            expect(func4).to.throw('Invalid Information!');
            expect(func5).to.throw('Invalid Information!');
            expect(func6).to.throw('Invalid Information!');
            expect(func7).to.throw('Invalid Information!');
            expect(func8).to.throw('Invalid Information!');
            expect(func9).to.throw('Invalid Information!');
            expect(func10).to.throw('Invalid Information!');
            expect(func11).to.throw('Invalid Information!');
            expect(func12).to.throw('Invalid Information!');
            expect(func13).to.throw('Invalid Information!');
            expect(func14).to.throw('Invalid Information!');
            expect(func15).to.throw('Invalid Information!');
        });

        it('returns correct result', () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal('Toyota, Peugeot');
            expect(chooseYourCar.brandName(["BMW"], 0)).to.equal('');
        });
    });

    describe('car fuel consumption', () => {
        it('input validation', () => {
            const func1 = () => chooseYourCar.carFuelConsumption('1', 1);
            const func2 = () => chooseYourCar.carFuelConsumption('1', '1');
            const func3 = () => chooseYourCar.carFuelConsumption(1, []);
            const func4 = () => chooseYourCar.carFuelConsumption([], 1);
            const func5 = () => chooseYourCar.carFuelConsumption([], []);
            const func6 = () => chooseYourCar.carFuelConsumption(1, {});
            const func7 = () => chooseYourCar.carFuelConsumption({}, {});
            const func8 = () => chooseYourCar.carFuelConsumption({}, 1);
            const func9 = () => chooseYourCar.carFuelConsumption(9);
            const func10 = () => chooseYourCar.carFuelConsumption(9, -7);
            const func11 = () => chooseYourCar.carFuelConsumption(-9, 7);
            const func12 = () => chooseYourCar.carFuelConsumption(-9, -7);
            const func13 = () => chooseYourCar.carFuelConsumption();
            const func14 = () => chooseYourCar.carFuelConsumption(0);
            const func15 = () => chooseYourCar.carFuelConsumption(0, 8);
            const func16 = () => chooseYourCar.carFuelConsumption(0, 0);
            const func17 = () => chooseYourCar.carFuelConsumption(8, 0);

            expect(func1).to.throw(Error, 'Invalid Information!');
            expect(func2).to.throw(Error, 'Invalid Information!');
            expect(func3).to.throw(Error, 'Invalid Information!');
            expect(func4).to.throw(Error, 'Invalid Information!');
            expect(func5).to.throw(Error, 'Invalid Information!');
            expect(func6).to.throw(Error, 'Invalid Information!');
            expect(func7).to.throw(Error, 'Invalid Information!');
            expect(func8).to.throw(Error, 'Invalid Information!');
            expect(func9).to.throw(Error, 'Invalid Information!');
            expect(func10).to.throw(Error, 'Invalid Information!');
            expect(func11).to.throw(Error, 'Invalid Information!');
            expect(func12).to.throw(Error, 'Invalid Information!');
            expect(func13).to.throw(Error, 'Invalid Information!');
            expect(func14).to.throw(Error, 'Invalid Information!');
            expect(func15).to.throw(Error, 'Invalid Information!');
            expect(func16).to.throw(Error, 'Invalid Information!');
            expect(func17).to.throw(Error, 'Invalid Information!');
        })

        it('returns correct input', () => {
            expect(chooseYourCar.carFuelConsumption(10, 190)).to.equal('The car burns too much fuel - 1900.00 liters!');
            expect(chooseYourCar.carFuelConsumption(5, 0.1)).to.equal('The car is efficient enough, it burns 2.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(5, 0.35)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });
    });
});