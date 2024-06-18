document.addEventListener("DOMContentLoaded", function () {
    const inputBookTitle = document.getElementById("inputBookTitle");
    const inputBookAuthor = document.getElementById("inputBookAuthor");
    const inputBookYear = document.getElementById("inputBookYear");
    const inputBookIsComplete = document.getElementById("inputBookIsComplete");
    const bookSubmit = document.getElementById("bookSubmit");
    const bookshelfLists = document.querySelectorAll(".book_list");
    const editFormContainer = document.getElementById("editBookFormContainer");

    let books = [];

    const addBook = function () {
        const title = inputBookTitle.value;
        const author = inputBookAuthor.value;
        const year = parseInt(inputBookYear.value);
        const isComplete = inputBookIsComplete.checked;

        const id = generateUniqueId();

        const book = {
            id: id,
            title: title,
            author: author,
            year: year,
            isComplete: isComplete
        };

        books.push(book);
        saveBooksToLocalStorage();
        renderBooks();
        resetInput();
    };


    const generateUniqueId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const saveBooksToLocalStorage = function () {
        localStorage.setItem("books", JSON.stringify(books));
    };

    const loadBooksFromLocalStorage = function () {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            books = JSON.parse(storedBooks);
        }
    };

    const renderBooks = function () {
        bookshelfLists.forEach(function (bookshelfList) {
            bookshelfList.innerHTML = "";
        });

        books.forEach(function (book) {
            const bookItem = makeBookElement(book);
            const bookshelfList = book.isComplete ? document.getElementById("completeBookshelfList") : document.getElementById("incompleteBookshelfList");
            bookshelfList.appendChild(bookItem);
        });

        updateBookshelf();
    };

    const makeBookElement = function (book) {
        const bookTitle = document.createElement("h3");
        bookTitle.innerText = book.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.innerText = `Penulis: ${book.author}`;

        const bookYear = document.createElement("p");
        bookYear.innerText = `Tahun: ${book.year}`;

        const bookId = document.createElement("p");
        bookId.innerText = `ID: ${book.id}`;

        const actionContainer = document.createElement("div");
        actionContainer.classList.add("action");

        const button = document.createElement("button");
        button.classList.add(book.isComplete ? "green" : "red");
        button.innerText = book.isComplete ? "Belum selesai di Baca" : "Selesai dibaca";
        button.addEventListener("click", function () {
            moveBook(book);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("red");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteBook(book);
        });

        const editButton = document.createElement("button");
        editButton.classList.add("red");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", function () {
            editBook(book);
        });

        actionContainer.appendChild(button);
        actionContainer.appendChild(editButton);
        actionContainer.appendChild(deleteButton);

        const bookItem = document.createElement("article");
        bookItem.classList.add("book_item");
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(bookYear);
        bookItem.appendChild(bookId);
        bookItem.appendChild(actionContainer);

        return bookItem;
    };

    const moveBook = function (book) {
        book.isComplete = !book.isComplete;
        saveBooksToLocalStorage();
        renderBooks();
    };

    const deleteBook = function (book) {
        const confirmation = confirm("Anda yakin ingin menghapus buku ini?");
        if (confirmation) {
            books = books.filter(function (b) {
                return b !== book;
            });
            saveBooksToLocalStorage();
            renderBooks();
            alert("Data Telah Terhapus");
        }
    };

    const resetInput = function () {
        inputBookTitle.value = "";
        inputBookAuthor.value = "";
        inputBookYear.value = "";
        inputBookIsComplete.checked = false;
    };

    const searchBook = function () {
        const searchKeyword = document.getElementById("searchBookTitle").value.toLowerCase();
        const filteredBooks = books.filter(function (book) {
            const title = book.title.toLowerCase();
            const author = book.author.toLowerCase();
            const year = book.year.toString();
            return title.includes(searchKeyword) || author.includes(searchKeyword) || year.includes(searchKeyword);
        });
        renderFilteredBooks(filteredBooks);
    };

    const renderFilteredBooks = function (filteredBooks) {
        bookshelfLists.forEach(function (bookshelfList) {
            bookshelfList.innerHTML = "";
        });

        filteredBooks.forEach(function (book) {
            const bookItem = makeBookElement(book);
            const bookshelfList = book.isComplete ? document.getElementById("completeBookshelfList") : document.getElementById("incompleteBookshelfList");
            bookshelfList.appendChild(bookItem);
        });

        updateBookshelf();
    };

    const editBook = function (book) {
        editFormContainer.style.display = "block";

        document.getElementById("editBookTitle").value = book.title;
        document.getElementById("editBookAuthor").value = book.author;
        document.getElementById("editBookYear").value = book.year;
        document.getElementById("editBookIsComplete").checked = book.isComplete;
        document.getElementById("editBookId").innerText = `ID: ${book.id}`;

        document.getElementById("editBookForm").addEventListener("submit", function (event) {
            event.preventDefault();

            
            book.title = document.getElementById("editBookTitle").value;
            book.author = document.getElementById("editBookAuthor").value;
            book.year = parseInt(document.getElementById("editBookYear").value);
            book.isComplete = document.getElementById("editBookIsComplete").checked;

            editFormContainer.style.display = "none";

            saveBooksToLocalStorage();
            renderBooks();
        });
    };

    document.getElementById("searchBook").addEventListener("submit", function(event) {
    event.preventDefault(); 
    searchBook(); 
});


    bookSubmit.addEventListener("click", addBook);

    loadBooksFromLocalStorage();
    renderBooks();
});