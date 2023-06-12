const { expect } = require('chai');
const mathEnforcer = require('./4');

describe("General Tests for Math Enforcer", () => {
    it("It should return object", () => {
        expect(typeof mathEnforcer).to.equal("object")
    });

    describe("Functionality tests for AddFive", () => {
        it("If given param is not a number it should return undefined", () => {
            expect(mathEnforcer.addFive("10")).to.be.undefined
        });
        it("If given param is positive number it should function correctly", () => {
            expect(mathEnforcer.addFive(10)).to.equal(15)
        });
        it("If given param is negative number it should function correctly", () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5)
        });
        it("If given param is floating number it should function correctly", () => {
            expect(mathEnforcer.addFive(1.33)).to.closeTo(6.33, 0.01)
        });

    })
    describe("Functionality tests for SubstractTen", () => {
        it("If given param is not a number it should return undefined", () => {
            expect(mathEnforcer.subtractTen("10")).to.be.undefined
        });
        it("If given param is positive number it should function correctly", () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
        });
        it("If given param is negative number it should function correctly", () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        });
        it("If given param is floating number it should function correctly", () => {
            expect(mathEnforcer.subtractTen(1.33)).to.closeTo(-8.67, 0.01)
        });
    })

    describe("Functionality tests for sum", () => {
        it("If first param is not a number it should return undefined", () => {
            expect(mathEnforcer.sum("10", 10)).to.be.undefined
        });
        it("If second param is not a number it should return undefined", () => {
            expect(mathEnforcer.sum(10, "10")).to.be.undefined
        });
        it("If both params are valid it should function correctly", () => {
            expect(mathEnforcer.sum(10, 10)).to.equal(20)
        });
        it("If first param is floating number it should return undefined", () => {
            expect(mathEnforcer.sum(1.33, 10)).to.closeTo(11.33, 0.01)
        });
        describe("General Tests for Math Enforcer", () => {
            it("It should return object", () => {
                expect(typeof mathEnforcer).to.equal("object")
            });

            describe("Functionality tests for AddFive", () => {
                it("If given param is not a number it should return undefined", () => {
                    expect(mathEnforcer.addFive("10")).to.be.undefined
                });
                it("If given param is positive number it should function correctly", () => {
                    expect(mathEnforcer.addFive(10)).to.equal(15)
                });
                it("If given param is negative number it should function correctly", () => {
                    expect(mathEnforcer.addFive(-10)).to.equal(-5)
                });
                it("If given param is floating number it should function correctly", () => {
                    expect(mathEnforcer.addFive(1.33)).to.closeTo(6.33, 0.01)
                });

            })
            describe("Functionality tests for SubstractTen", () => {
                it("If given param is not a number it should return undefined", () => {
                    expect(mathEnforcer.subtractTen("10")).to.be.undefined
                });
                it("If given param is positive number it should function correctly", () => {
                    expect(mathEnforcer.subtractTen(10)).to.equal(0)
                });
                it("If given param is negative number it should function correctly", () => {
                    expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
                });
                it("If given param is floating number it should function correctly", () => {
                    expect(mathEnforcer.subtractTen(1.33)).to.closeTo(-8.67, 0.01)
                });
            })

            describe("Functionality tests for sum", () => {
                it("If first param is not a number it should return undefined", () => {
                    expect(mathEnforcer.sum("10", 10)).to.be.undefined
                });
                it("If second param is not a number it should return undefined", () => {
                    expect(mathEnforcer.sum(10, "10")).to.be.undefined
                });
                it("If both params are valid it should function correctly", () => {
                    expect(mathEnforcer.sum(10, 10)).to.equal(20)
                });
                it("If first param is floating number it should function correctly", () => {
                    expect(mathEnforcer.sum(1.33, 10)).to.closeTo(11.33, 0.01)
                });
                it("If first param  is negative number it should function correctly", () => {
                    expect(mathEnforcer.sum(-5, 10)).to.equal(5)
                });
                it("If second param is floating number it should function correctly", () => {
                    expect(mathEnforcer.sum(10, 1.33)).to.closeTo(11.33, 0.01)
                });
                it("If second param  is negative number it should function correctly", () => {
                    expect(mathEnforcer.sum(10, -5)).to.equal(5)
                });
            })
        });

    })
});