const express = require('express')
const libraryController = require('../controllers/library-controller')
const bookController = require('../controllers/book-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-todas", libraryController.getAllsLibrary)
router.get("/obtener-por-id/:libraryId", libraryController.getLibraryById)
router.post("/crear-libreria", isAuthenticated, libraryController.createLibrary)
router.put("/editar-libreria/:libraryId", isAuthenticated, libraryController.editLibrary)
router.delete("/borrar-libreria/:libraryId", isAuthenticated, libraryController.deleteLibrary)

router.post("/crear-libro", isAuthenticated, bookController.createBook)

module.exports = router