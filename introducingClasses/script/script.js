class book{
    constructor(page, author, text){
        this.page = page;
        this.author = author;
        this.genre = genre;
    }

    bookStats() {
        return 'This book has ${this.page} pages, written by ${this.author} and is a ${this.text}'
    }

    static totalPage(book1, book2) {
        const page1 = book1.page
        const page2 = book2.page

        return page1 + page2
    }
}

const twoFires = new book(436, Buhelman, fantasy)
const dune = new book(896, Herbert, sci-fi);

console.log(twoFires);
console.log(twoFires.bookStats());
console.log(dune);
console.log(dune.bookStats());
console.log(book.totalPage(twoFires, dune));

function sayHi(){
    return console.log("Hi, I can be called anywhere.");
}

sayHi;