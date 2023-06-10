const { Library } = require('../models/library-model')
const { Book } = require('../models/book-model')


async function getAll() {
    const listLibrarys = await Library.findAll({
        where: {
            borrado: false
        }
    })

    return listLibrarys
}

async function getById( id ) {
    const library = await Library.findByPk( id, {
        include: {
            model: Book,
            where: {
                borrado: false
            }
        }
    })

    if ( !library || library.borrado == true ) {
        throw new Error("No existe la libreria buscada...")
    }

    return library
}

async function createLibrary( name, location, telefono ) {
    const library = new Library()

    if ( !name || !location || !telefono ) {
        throw new Error("Faltan datos...")
    }
    
    library.name = name
    library.location = location
    library.telefono = telefono
    
    const libraryCreated = await library.save()
    return libraryCreated
}

async function editLibrary( id, name, location, telefono ) {
    const library = await getById( id )

    if ( !name || !location || !telefono ) {
        throw new Error("Faltan datos...")
    }

    if ( name ) {
        library.name = name
    }

    if ( location ) {
        library.location = location
    }

    if ( telefono ) {
        library.telefono = telefono
    }

    const libraryEdit = await library.save()
    return libraryEdit
}

async function deleteLibrary( libraryId ) {

    const library = await getById( libraryId )

    library.borrado = true

    await library.save()
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

module.exports = { getAll, getById, createLibrary, editLibrary, deleteLibrary, createBook }