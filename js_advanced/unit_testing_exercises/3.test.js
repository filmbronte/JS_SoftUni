const { expect } = require('chai');
const lookupChar = require('./3');

describe('Char lookup', () => {
    describe('Input validation', () => {
        it('checks if first parameter is string', () => {
            expect(lookupChar(4, 3)).to.be.undefined;
        });
        it('checks if second parameter is an integer', () => {
            expect(lookupChar('test', '2')).to.be.undefined;
            expect(lookupChar('test', 5.5)).to.be.undefined;
        });
    });
    describe('Index validation', () => {
        it('checks if index is out of bounds', () => {
            expect(lookupChar('test', 1000)).to.equal('Incorrect index');
        });
        it('checks if index is negative', () => {
            expect(lookupChar('test', -4)).to.equal('Incorrect index');
        });
    });
    describe('Result validation', () => {
        it('returns correct result', () => {
            expect(lookupChar('test', 1)).to.equal('e');
        });
    });
});