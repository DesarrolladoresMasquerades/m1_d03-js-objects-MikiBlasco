


const user = { name: 'Maik', id: 3};


const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
    };

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310786',
    category: 'Classic Literature'
    };

const book3 = {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        isbn: '0060850523',
        category: 'NeoClassic Literature'
        };


const library = [user];
user.books = [book3, book1]


console.log(library.user.books)

