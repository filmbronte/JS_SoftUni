const sum = require('./sum');


describe('Demo test', () => {
    it('works with 5 and 3', () => {
        if (sum(5, 3) != 8) {
            throw Error('did not work');
        }
    });
});