const { expect } = require('chai');
const rgbToHexColor = require('./6');

describe('RBG to Hex', () => {

    describe('check colors', () => {

        it('returns white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('returns black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('returns blue', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
    });

    describe('invalid parameters', () => {
        it('returns undefined if red value is invalid', () => {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(3000, 0, 0)).to.be.undefined;
        });
        it('returns undefined if green value is invalid', () => {
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 3000, 0)).to.be.undefined;
        });
        it('returns undefined if blue value is invalid', () => {
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 3000)).to.be.undefined;
        });
        it('returns undefined if missing parameters', () => {
            expect(rgbToHexColor(0, 0)).to.be.undefined;
        });

    });

    describe('incorrect type', () => {
        it('returns undefined if red value is incorrect type', () => {
            expect(rgbToHexColor('a', 0, 0)).to.be.undefined;
        });
        it('returns undefined if green value is incorrect type', () => {
            expect(rgbToHexColor(0, 'a', 0)).to.be.undefined;
        });
        it('returns undefined if blue value is incorrect type', () => {
            expect(rgbToHexColor(0, 0, 'a')).to.be.undefined;
        });
    });

});