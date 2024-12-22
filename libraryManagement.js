var Library = /** @class */ (function () {
    function Library(name) {
        this.name = name;
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book \"".concat(book.title, "\" by ").concat(book.author, " added to the library."));
    };
    Library.prototype.lendBook = function (title) {
        var availableBooks = this.books.filter(function (b) { return b.title === title && b.isAvailable; });
        if (availableBooks.length > 0) {
            availableBooks[0].isAvailable = false;
            console.log("Book \"".concat(title, "\" has been lent out."));
        }
        else {
            console.log("Book \"".concat(title, "\" is not available for lending."));
        }
    };
    Library.prototype.returnBook = function (title) {
        var lentBooks = this.books.filter(function (b) { return b.title === title && !b.isAvailable; });
        if (lentBooks.length > 0) {
            lentBooks[0].isAvailable = true;
            console.log("Book \"".concat(title, "\" has been returned."));
        }
        else {
            console.log("Book \"".concat(title, "\" was not found in the lent out books."));
        }
    };
    Library.prototype.listBooks = function () {
        console.log("Books in the library \"".concat(this.name, "\":"));
        this.books.forEach(function (book) {
            console.log("- ".concat(book.title, " by ").concat(book.author, " [").concat(book.isAvailable ? 'Available' : 'Not Available', "]"));
        });
    };
    return Library;
}());
var library = new Library('City Library');
library.addBook({ title: '1984', author: 'George Orwell', isAvailable: true });
library.addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: true });
library.listBooks();
library.lendBook('1984');
library.listBooks();
library.returnBook('1984');
library.listBooks();
