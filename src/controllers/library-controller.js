const libraryService = require('../services/library-service')
const bookService = require('../services/book-service')

async function getAllsLibrary(req, res) {

    const librarys =  await libraryService.getAll()

    res.status(200).send(librarys)
}

async function getLibraryById (req, res, next) {

    const { libraryId } = req.params

    try {
        const library = await libraryService.getById( libraryId )
    
        res.status(200).send(library)
    } catch (error) {
        next(error)
    }

}

async function createLibrary (req, res, next) {

    const { name, location, telefono } = req.body

    try {
        const library = await libraryService.createLibrary( name, location, telefono )
    
        res.status(200).send(library)
    } catch (error) {
        next(error)
    }

}

async function editLibrary (req, res, next) {
    const { name, location, telefono } = req.body
    const { libraryId } = req.params

    try {
        const libraryEdited = await libraryService.editLibrary( libraryId, name, location, telefono )
    
        res.status(200).send(libraryEdited)
    } catch (error) {
        next(error)
    }

}

async function deleteLibrary (req, res) {
    const { libraryId } = req.params

    await libraryService.deleteLibrary( libraryId )

    res.status(200).send(`Usuario con id ${libraryId} ha sido eliminado exitosamente!`)
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

module.exports = { getAllsLibrary, getLibraryById, createLibrary, editLibrary, deleteLibrary, createBook }