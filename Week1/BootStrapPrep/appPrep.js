class Library {
    constructor() {
        this.books = [
            {
                'bookId': '1',
                'title': "The Fellowship Of the Ring",
                'author': 'J. R. Tolkien',
            }
        ];
    }
    addBook(id, title, author) {
        const book = {
            'bookId' : id,
            'title' : title,
            'author' : author
        }
        console.log("Adding book:", book);
        this.books.push(book);
    }

    removeBook(bookId) {
        console.log("Removing book with ID:", bookId);
        this.books = this.books.filter(book => book.bookId !== bookId);
    }
}
// Front-end functionality
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const bookCount = document.getElementById('book-count');

const library = new Library();
function displayBooks() {
    bookList.innerHTML = '';
    library.books.forEach((book) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>ID:</strong> ${book.bookId}</span>
            <span><strong>Title:</strong> ${book.title}</span>
            <span><strong>Author:</strong> ${book.author}</span>
            <button onclick="removeBook('${book.bookId}')">Delete</button>
        `;
        bookList.appendChild(li);
    });
    updateBookCount();
}
function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // Generate a new unique ID (for simplicity, this example uses a fixed value; use a more robust method in production)
    const id = (library.books.length + 1).toString();

    library.addBook(id, title, author);
    displayBooks();
    bookForm.reset();
}
function removeBook(id) {
    library.removeBook(id);
    displayBooks();
}
function updateBookCount() {
    bookCount.textContent = `Total Books: ${library.books.length}`;
}
bookForm.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', displayBooks);