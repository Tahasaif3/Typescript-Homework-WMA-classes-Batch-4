interface Book {
  title: string;
  author: string;
  isAvailable: boolean;
}

class Library {
   name: string;
   books: Book[];

  constructor(name: string) {
      this.name = name;
      this.books = [];
  }

  public addBook(book: Book): void {
      this.books.push(book);
      console.log(`Book "${book.title}" by ${book.author} added to the library.`);
  }

  public lendBook(title: string): void {
    const availableBooks = this.books.filter(b => b.title === title && b.isAvailable);
    if (availableBooks.length > 0) {
        availableBooks[0].isAvailable = false;
        console.log(`Book "${title}" has been lent out.`);
    } else {
        console.log(`Book "${title}" is not available for lending.`);
    }
}

public returnBook(title: string): void {
    const lentBooks = this.books.filter(b => b.title === title && !b.isAvailable);
    if (lentBooks.length > 0) {
        lentBooks[0].isAvailable = true;
        console.log(`Book "${title}" has been returned.`);
    } else {
        console.log(`Book "${title}" was not found in the lent out books list.`);
    }
}

  public listBooks(): void {
      console.log(`Books which are available in the library "${this.name}":`);
      this.books.forEach(book => {
          console.log(`- ${book.title} by ${book.author} [${book.isAvailable ? 'Available' : 'Not Available'}]`);
      });
  }
}
 
const library = new Library('City Library');
library.addBook({ title: '1984', author: 'George Orwell', isAvailable: true });
library.addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: true });
library.listBooks();

library.lendBook('1984');
library.listBooks();

library.returnBook('1984');
library.listBooks();