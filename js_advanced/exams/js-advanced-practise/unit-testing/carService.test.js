const { expect } = require('chai');
const carService = require('./carService');

describe("Car Service", () => {
    describe("Is it expensive", () => {
        it("Returns correct result if input is 'Engine' ", () => {
            expect(carService.isItExpensive("Engine")).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it("Returns correct result if input is 'Transmission' ", () => {
            expect(carService.isItExpensive("Transmission")).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it("Returns correct result if input is other ", () => {
            expect(carService.isItExpensive("other..")).to.equal('The overall price will be a bit cheaper');
        });

    });

    describe("Discount", () => {
        it('Input validation', () => {
            const func1 = () => carService.discount('1', 3);
            const func2 = () => carService.discount([1], 3);
            const func3 = () => carService.discount({}, 3);
            const func4 = () => carService.discount(3);
            const func5 = () => carService.discount(3, '4');
            const func6 = () => carService.discount(3, [6]);
            const func7 = () => carService.discount(3, {});
            const func8 = () => carService.discount(undefined, 3);
            const func9 = () => carService.discount(5, undefined);
            const func10 = () => carService.discount(5, null);

            expect(func1).to.throw(Error, 'Invalid input');
            expect(func2).to.throw(Error, 'Invalid input');
            expect(func3).to.throw(Error, 'Invalid input');
            expect(func4).to.throw(Error, 'Invalid input');
            expect(func5).to.throw(Error, 'Invalid input');
            expect(func6).to.throw(Error, 'Invalid input');
            expect(func7).to.throw(Error, 'Invalid input');
            expect(func8).to.throw(Error, 'Invalid input');
            expect(func9).to.throw(Error, 'Invalid input');
            expect(func10).to.throw(Error, 'Invalid input');
        });

        it('numberOfParts > 2 and <= 7', () => {
            expect(carService.discount(3, 10)).to.equal('Discount applied! You saved 1.5$');
            expect(carService.discount(7, 10)).to.equal('Discount applied! You saved 1.5$');
        });
        it('numberOfParts > 7', () => {
            expect(carService.discount(9, 10)).to.equal('Discount applied! You saved 3$');
        });
        it('numberOfParts <= 2', () => {
            expect(carService.discount(0, 10)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 10)).to.equal("You cannot apply a discount");
        });
    });

    describe('Parts to buy', () => {
        it('Input validation', () => {
            const func1 = () => carService.partsToBuy({}, []);
            const func2 = () => carService.partsToBuy(3, []);
            const func3 = () => carService.partsToBuy('6', []);
            const func4 = () => carService.partsToBuy(undefined, []);
            const func5 = () => carService.partsToBuy(null, []);
            const func6 = () => carService.partsToBuy([], 3);
            const func7 = () => carService.partsToBuy([], '6');
            const func8 = () => carService.partsToBuy([], {});
            const func9 = () => carService.partsToBuy([], undefined);
            const func10 = () => carService.partsToBuy([], null);
            const func11 = () => carService.partsToBuy([]);

            expect(func1).to.throw(Error, 'Invalid input');
            expect(func2).to.throw(Error, 'Invalid input');
            expect(func3).to.throw(Error, 'Invalid input');
            expect(func4).to.throw(Error, 'Invalid input');
            expect(func5).to.throw(Error, 'Invalid input');
            expect(func6).to.throw(Error, 'Invalid input');
            expect(func7).to.throw(Error, 'Invalid input');
            expect(func8).to.throw(Error, 'Invalid input');
            expect(func9).to.throw(Error, 'Invalid input');
            expect(func10).to.throw(Error, 'Invalid input');
            expect(func11).to.throw(Error, 'Invalid input');
        });

        it('Returns 0 if partsCatalogue is empty', () => {
            const parts = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            const partsToBuy = ["blowoff valve", "injectors"];

            expect(carService.partsToBuy([], partsToBuy)).to.equal(0);
        });

        it('Returns collect value', () => {
            const parts = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            const partsToBuy = ["blowoff valve", "injectors"];

            expect(carService.partsToBuy(parts, partsToBuy)).to.equal(145);
        });
    });
});