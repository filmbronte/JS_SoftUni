const { expect } = require('chai');
const isSymmetric = require('./5');

/*
 Take an array as an argument
 Return false for any input that isn’t of the correct type
 Return true if the input array is symmetric
 Otherwise, return false
*/

describe('Symmetry checker', () => {
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 1])).to.be.false;
    });
    it('return false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    // more cases
    it('return true for symmetric array with odd amount of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('return false for string', () => {
        expect(isSymmetric('abba')).to.be.false;
    });
    it('return true for empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('return true for array with 1 element', () => {
        expect(isSymmetric([1])).to.be.true;
    });
    it('return true for array with 2 same elements', () => {
        expect(isSymmetric([2, 2])).to.be.true;
    });
    it('return true for symmetric array with strings', () => {
        expect(isSymmetric(['1', '2', '2', '1'])).to.be.true;
    });
    it('return false for non-symmetric array with strings', () => {
        expect(isSymmetric(['1', '1', '2', '1'])).to.be.false;
    });
    it('return true for mixed symmetric array', () => {
        expect(isSymmetric([1, 'a', 'a', 1])).to.be.true;
    });
    it('return true for matrix', () => {
        expect(isSymmetric([[1, 'a'], [1, 'a']])).to.be.true;
    });
});