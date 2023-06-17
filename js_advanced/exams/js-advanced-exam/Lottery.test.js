const { expect } = require('chai');
const lottery = require('./Lottery');

describe("Lottery", function () {
    describe("buyLotteryTicket", function () {
        it("Input validation", function () {
            expect(() => lottery.buyLotteryTicket(4, '5', true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket('5', 4, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(4, [], true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket([], 8, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9, {}, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket({}, 5, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9, 5, 'true')).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9, 5, 8)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9, 5, [])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9, 5, {})).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9, 5)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(9)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket()).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(-9, 6, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, -5, true)).to.throw(Error, 'Invalid input!');
        });

        it('if buy == false', () => {
            expect(() => lottery.buyLotteryTicket(4, 8, false)).to.throw(Error, 'Unable to buy lottery ticket!');
        });

        it('returns correct', () => {
            expect(lottery.buyLotteryTicket(2, 5, true)).to.equal('You bought 5 tickets for 10$.')
        });

    });

    describe('checkTicket', () => {
        it('Input validation (checks if array)', () => {
            let correct = [1, 2, 3, 4, 5, 6];
            expect(() => lottery.checkTicket(2, correct)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct, 4)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct, {})).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket({}, correct)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket()).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct, '')).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket('', correct)).to.throw(Error, "Invalid input!");
        });

        it('Input validation (checks if array is valid)', () => {
            let correct = [1, 2, 3, 4, 5, 6];
            expect(() => lottery.checkTicket([1, 2, 3], correct)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket([], correct)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], correct)).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct, [1, 2, 3, 4, 5, 6, 7])).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct, [1, 2, 7])).to.throw(Error, "Invalid input!");
            expect(() => lottery.checkTicket(correct, [])).to.throw(Error, "Invalid input!");
        });

        it('Returns correct output', () => {
            expect(lottery.checkTicket([2, 1, 3, 5, 7, 8], [1, 2, 3, 0, 9, 6])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([2, 1, 3, 5, 7, 8], [2, 1, 3, 5, 7, 9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([2, 1, 3, 5, 7, 8], [2, 1, 3, 5, 6, 9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6])).to.equal(undefined);
            expect(lottery.checkTicket([2, 1, 3, 5, 7, 8], [2, 1, 3, 5, 7, 8])).to.equal('You win the JACKPOT!!!');
        });
    });

    describe('secondChance', () => {
        it('input validation', () => {
            expect(() => lottery.secondChance('4', [])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance([], [])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance({}, [])).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance(1, '')).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance(1, 8)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance(1, {})).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance(1)).to.throw(Error, 'Invalid input!');
            expect(() => lottery.secondChance([])).to.throw(Error, 'Invalid input!');
        });

        it('returns correct output', () => {
            expect(lottery.secondChance(1, [2, 1, 3, 5, 7, 8])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(0, [2, 1, 3, 5, 7, 8])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});