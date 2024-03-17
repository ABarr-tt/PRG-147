// Define book objects
var books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960,
        synopsis: "A lawyer in the Depression-era South defends a black man against an undeserved rape charge, and his children against prejudice."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925,
        synopsis: "Follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922."
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        year: 1949,
        synopsis: "Depicts a dystopian future society where thoughts are controlled and independent thinking is forbidden."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813,
        synopsis: "Tells the story of Elizabeth Bennet and her love affair with the proud Mr. Darcy."
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming-of-Age Fiction",
        year: 1951,
        synopsis: "Narrates the experiences of Holden Caulfield, a teenager who wanders the streets of New York City after being expelled from his prep school."
    }
];

// Function to load books onto the webpage
function loadBooks() {
    var bookContainer = document.getElementById('bookContainer');
    var bookTemplate = document.getElementById('bookTemplate');

    books.forEach(function(book) {
        var clone = bookTemplate.content.cloneNode(true);
        clone.querySelector('.title').textContent = book.title;
        clone.querySelector('.author').textContent = book.author;
        clone.querySelector('.genre').textContent = book.genre;
        clone.querySelector('.year').textContent = book.year;
        clone.querySelector('.synopsis').textContent = book.synopsis;
        bookContainer.appendChild(clone);
    });
}
