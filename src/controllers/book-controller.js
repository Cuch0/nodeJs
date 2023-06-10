const bookService = require('../services/book-service')

async function getAllsBooks(req, res) {

    const books =  await bookService.getAll()

    res.status(200).send(books)
}

async function getBookById(req, res, next) {

    const { bookId } = req.params

    try {
        const book =  await bookService.getById( bookId )
    
        res.status(200).send(book)
    } catch (error) {
        next(error)
    }

}

async function createBook(req, res, next) {

    const { isbn, titulo, autor, year, library } = req.body

    try {
        const book = await bookService.createBook( isbn, titulo, autor, year, library )
    
        res.status(200).send(book)
    } catch (error) {
        next(error)
    }

}

async function editBook(req, res, next) {
    const { isbn, titulo, autor, year, library } = req.body
    const { bookId } = req.params

    try {
        const book =  await bookService.editBook( bookId, isbn, titulo, autor, year, library )
    
        res.status(200).send(book)
    } catch (error) {
        next(error)
    }

}

async function deleteBook(req, res) {

    const { bookId } = req.params

    const book =  await bookService.deleteBook( bookId )

    res.status(200).send(book)
}

module.exports = { getAllsBooks, getBookById, createBook, editBook, deleteBook }