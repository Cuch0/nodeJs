const { Error } = require('sequelize')
const { Book } = require('../models/book-model')

async function getAll() {
    const listBooks = await Book.findAll({
        where: {
            borrado: false
        }
    })

    return listBooks
}

async function getById( bookId ) {
    const book = await Book.findByPk( bookId )

    if ( !book || book.borrado == true ) {
        throw new Error("No existe el libro buscado...")
    }

    return book
}

async function createBook( isbn, titulo, autor, year, library ) {
    const book = new Book()

    if (!isbn || !titulo || !autor || !year || !library ) {
        throw new Error("Faltan datos...")
    }

    book.isbn = isbn
    book.titulo = titulo
    book.autor = autor
    book.year = year
    book.library = library
    
    const bookCreated = await book.save()

    return bookCreated
}

async function editBook(bookId, isbn, titulo, autor, year, library ) {
    const book = await getById( bookId )

    if ( !isbn || !titulo || !autor || !year || !library ) {
        throw new Error("Faltan datos...")
    }

    if ( isbn ) {
        book.isbn = isbn
    }
    
    if ( titulo ) {
        book.titulo = titulo
    }

    if ( autor ) {
        book.autor = autor
    }

    if ( year ) {
        book.year = year
    }

    if ( library ) {
        book.library = library
    }
    
    const bookEdit = await book.save()

    return bookEdit
}

async function deleteBook( bookId ) {
    const book = await Book.findByPk( bookId )

    book.borrado = true

    await book.save()
}

module.exports = { getAll, getById, createBook, editBook, deleteBook }