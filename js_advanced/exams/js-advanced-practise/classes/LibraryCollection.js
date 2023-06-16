class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const match = this.books.find(b => b.bookName == bookName);

        if (!match) {
            throw new Error(`${bookName} is not in the collection.`);
        } else if (match.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            match.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }

    removeBook(bookName) {
        const index = this.books.findIndex(b => b.bookName == bookName);
        const match = this.books[index];

        if (!match) {
            throw new Error("The book, you're looking for, is not found.");
        } else if (match.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`;
        }

    }

    getStatistics(bookAuthor) {
        let emptySlots = this.capacity - this.books.length;

        if (bookAuthor === undefined) {
            let result = [`The book collection has ${emptySlots} empty spots left.`];

            const sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sorted.forEach(book => {
                if (book.payed === true) {
                    result.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                } else if (book.payed === false) {
                    result.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
                }
            });

            return result.join('\n');
        } else {
            const index = this.books.findIndex(b => b.bookAuthor == bookAuthor);
            const match = this.books[index];

            if (!match) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                if (match.payed == true) {
                    return `${match.bookName} == ${match.bookAuthor} - Has Paid.`;
                } else {
                    return `${match.bookName} == ${match.bookAuthor} - Not Paid.`;
                }
            }
        }
    }
}

// const library = new LibraryCollection(2);

// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));

// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));

// console.log(library.addBook('Ulysses', 'James Joyce')); 

// const library = new LibraryCollection(2);

// library.addBook('In Search of Lost Time', 'Marcel Proust');

// console.log(library.payBook('In Search of Lost Time'));

// // console.log(library.payBook('Don Quixote')); 
// console.log(library.removeBook('Don Quixote')); 

// const library = new LibraryCollection(2)

// library.addBook('In Search of Lost Time', 'Marcel Proust');

// library.addBook('Don Quixote', 'Miguel de Cervantes');

// library.payBook('Don Quixote');

// console.log(library.removeBook('Don Quixote'));

// // console.log(library.removeBook('In Search of Lost Time'));

// console.log(library.getStatistics())

// const library = new LibraryCollection(5);
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics()); 

const library = new LibraryCollection(2)

console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));

console.log(library.getStatistics('Miguel de Cervantes')); 