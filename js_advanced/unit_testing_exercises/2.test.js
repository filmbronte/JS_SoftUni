const { expect } = require('chai');
const isOddOrEven = require('./2');

describe('Odd or Even', () => {
    describe('check if input is string', () => {
        it('returns undefines if input\'s type is a number', () => {
            expect(isOddOrEven(5)).to.be.undefined;
        });
        it('returns undefines if input\'s type is an empty list', () => {
            expect(isOddOrEven([])).to.be.undefined;
        });
        it('returns undefines if input\'s type is a list of a string', () => {
            expect(isOddOrEven(['hello'])).to.be.undefined;
        });
        it('returns undefines if input\'s type is an object', () => {
            expect(isOddOrEven({})).to.be.undefined;
        });
    });

    describe('check if input is even', () => {
        it('returns even', () => {
            expect(isOddOrEven('cats')).to.equal('even');
        });
        it('returns odd', () => {
            expect(isOddOrEven('cat')).to.equal('odd');
        });
    });

    describe('extra tests', () => {
        it('returns even', () => {
            expect(isOddOrEven('cats', 'even', 'test')).to.equal('even');
        });
    });
});