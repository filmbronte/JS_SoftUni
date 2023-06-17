const { expect } = require('chai');
const weddingDay = require('./weddingDay');

describe("Wedding day", () => {
    describe("pickVenue", () => {
        it("Input validation", () => {
            expect(() => weddingDay.pickVenue('', 2, '')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(1, '', '')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(1, 2, 3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(1, 2, [])).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(1, [], '')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue([], 2, '')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue({}, 0, '')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(9, {}, '')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(9, 9, {})).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(9, 9)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(9)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue()).to.throw(Error, "Invalid Information!");
        });

        it("Throws error if location != Varna", () => {
            expect(() => weddingDay.pickVenue(10, 8, 'Plovdiv')).to.throw(Error, 'The location of this venue is not in the correct area!');
        });

        it('Returns correct output if capacity >= 150 and price <= 120', () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
            expect(weddingDay.pickVenue(200, 100, 'Varna')).to.equal("This venue meets the requirements, with capacity of 200 guests and 100$ cover.");
        });

        it('Returns correct output if requirements are not met', () => {
            expect(weddingDay.pickVenue(120, 200, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
    });

    describe("otherSpendings", () => {
        it('Input information', () => {
            expect(() => weddingDay.otherSpendings([], '', true)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([], [], 'true')).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings('', [], true)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings(3, [], true)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([], 3, true)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([], [], 3)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([], [], [])).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([], {}, true)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings({}, [], true)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([], [])).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings([])).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.otherSpendings()).to.throw(Error, 'Invalid Information!');
        });

        it('Checks correct output', () => {
            expect(weddingDay.otherSpendings(['flowers'], ["pictures"], false)).to.equal("You spend 1200$ for wedding decoration and photography!");
        });
        it('Checks correct output with discount', () => {
            expect(weddingDay.otherSpendings(['flowers'], ["pictures"], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
        });
    });

    describe('tableDistribution', () => {
        it('Input validation', () => {
            expect(() => weddingDay.tableDistribution('3', 5)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(-9, 5)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(9, -5)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(6, '7')).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(6, {})).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution({}, 9)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution([], 9)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(7, [])).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(7)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution()).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(0)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(0, 8)).to.throw(Error, 'Invalid Information!');
            expect(() => weddingDay.tableDistribution(9, 0)).to.throw(Error, 'Invalid Information!');
        });

        it('returns correct output with people on the table < 6', () => {
            expect(weddingDay.tableDistribution(10, 5)).to.equal("There is only 2 people on every table, you can join some tables.");
        });

        it('returns correct with guests on table >= 6', () => {
            expect(weddingDay.tableDistribution(36, 6)).to.equal("You have 6 tables with 6 guests on table.");
            expect(weddingDay.tableDistribution(100, 10)).to.equal("You have 10 tables with 10 guests on table.");
        });
    });
});