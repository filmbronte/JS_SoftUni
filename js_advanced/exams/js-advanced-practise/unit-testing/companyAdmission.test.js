const { expect } = require('chai');
const companyAdministration = require('./companyAdmission');

describe("Company Admission", () => {
    describe("Hiring Employee", () => {
        it("throws error if position name != programmer", () => {
            const func1 = () => companyAdministration.hiringEmployee('Steve', 'Manager', 20);

            expect(func1).to.throw(Error, 'We are not looking for workers for this position.');
        });

        it("employee is hired if experience is >= 3", () => {
            expect(companyAdministration.hiringEmployee('John', 'Programmer', 4)).to.equal(`John was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('John', 'Programmer', 3)).to.equal(`John was successfully hired for the position Programmer.`);
        });

        it("employee is NOT hired if experience is < 3", () => {
            expect(companyAdministration.hiringEmployee('John', 'Programmer', 0)).to.equal(`John is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('John', 'Programmer', 2)).to.equal(`John is not approved for this position.`);
        });
    });

    describe('Calculate Salary', () => {
        it('Input validation', () => {
            const func1 = () => companyAdministration.calculateSalary('4');
            const func2 = () => companyAdministration.calculateSalary(-10);
            const func3 = () => companyAdministration.calculateSalary([3]);
            const func4 = () => companyAdministration.calculateSalary({ 3: 3 });
            const func5 = () => companyAdministration.calculateSalary();
            const func6 = () => companyAdministration.calculateSalary(undefined);
            const func7 = () => companyAdministration.calculateSalary(null);

            expect(func1).to.throw(Error, "Invalid hours");
            expect(func2).to.throw(Error, "Invalid hours");
            expect(func3).to.throw(Error, "Invalid hours");
            expect(func4).to.throw(Error, "Invalid hours");
            expect(func5).to.throw(Error, "Invalid hours");
            expect(func6).to.throw(Error, "Invalid hours");
            expect(func7).to.throw(Error, "Invalid hours");
        });

        it('Returns correct salary', () => {
            expect(companyAdministration.calculateSalary(30)).to.equal(450);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });

        it('Returns correct salary if hours > 160', () => {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });
    });

    describe('Fired Employee', () => {
        it('Input validation (type)', () => {
            const func1 = () => companyAdministration.firedEmployee('Steve', 5);
            const func2 = () => companyAdministration.firedEmployee(8, 5);
            const func3 = () => companyAdministration.firedEmployee({}, 5);
            const func4 = () => companyAdministration.firedEmployee(undefined, 5);

            expect(func1).to.throw(Error, "Invalid input");
            expect(func2).to.throw(Error, "Invalid input");
            expect(func3).to.throw(Error, "Invalid input");
            expect(func4).to.throw(Error, "Invalid input");
        });

        it('Input validation (index)', () => {
            const func1 = () => companyAdministration.firedEmployee(['Steve', 'John'], 5);
            const func2 = () => companyAdministration.firedEmployee(['Steve', 'John'], '7');
            const func3 = () => companyAdministration.firedEmployee(['Steve', 'John'], undefined);
            const func4 = () => companyAdministration.firedEmployee(['Steve', 'John'], [4]);
            const func5 = () => companyAdministration.firedEmployee(['Steve', 'John'], {});
            const func6 = () => companyAdministration.firedEmployee(['Steve', 'John'], -1);
            const func7 = () => companyAdministration.firedEmployee(['Steve', 'John'], 1.1);

            expect(func1).to.throw(Error, "Invalid input");
            expect(func2).to.throw(Error, "Invalid input");
            expect(func3).to.throw(Error, "Invalid input");
            expect(func4).to.throw(Error, "Invalid input");
            expect(func5).to.throw(Error, "Invalid input");
            expect(func6).to.throw(Error, "Invalid input");
            expect(func7).to.throw(Error, "Invalid input");
        });

        it('Returns correct result', () => {
            expect(companyAdministration.firedEmployee(['Steve', 'John', 'Adam'], 1)).to.equal('Steve, Adam');
            expect(companyAdministration.firedEmployee(['Steve'], 0)).to.equal('');
        });
    });
});