const { expect } = require('chai');
const bookSelection = require('./bookSelection');

describe("bookSelection", function () {
    describe("isGenreSuitable", function () {
        it("returns not suitable if genre is horror and age is <= 12", function () {
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
        });
        it("returns not suitable if genre is thriller and age is <= 12", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
        });
        it("returns suitable", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal('Those books are suitable');
        });
    });


    describe("isItAffordable", function () {
        it("input validation", function () {
            let price = '20';
            let budget = '30';

            let resultFunc1 = () => bookSelection.isItAffordable(price, 30);
            let resultFunc2 = () => bookSelection.isItAffordable(20, budget);
            expect(resultFunc1).to.throw(Error, 'Invalid input');
            expect(resultFunc2).to.throw(Error, 'Invalid input');

        });
        it("not enough money", function () {
            expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
        });
        it("has enough money", function () {
            expect(bookSelection.isItAffordable(20, 30)).to.equal("Book bought. You have 10$ left");
        });
    });


    describe("suitableTitles", function () {
        it("input validation", function () {
            let books = 'not array';
            let correct = [{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Dracula", genre: "Horror" }];
            let wantedGenre = 23;

            let resultFuncOne = () => bookSelection.suitableTitles(books, 'test');
            let resultFuncTwo = () => bookSelection.suitableTitles(correct, wantedGenre);

            expect(resultFuncOne).to.throw(Error, 'Invalid input');
            expect(resultFuncTwo).to.throw(Error, 'Invalid input');
        });
        it("correct input", function () {
            let correct = [{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Dracula", genre: "Horror" }];

            expect(bookSelection.suitableTitles(correct, 'Thriller')).to.deep.equal(['The Da Vinci Code']);
        });
    });
});