const { expect } = require('chai');
const sum = require('./4');

describe('test', () => {
    it('returns correct sum', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
});