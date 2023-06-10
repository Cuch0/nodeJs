const express = require('express')
const bookController = require('../controllers/book-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-todos", bookController.getAllsBooks)
router.get("/obtener-por-id/:bookId", bookController.getBookById)
router.post("/crear-libro", isAuthenticated, bookController.createBook)
router.put("/editar-libro/:bookId", isAuthenticated, bookController.editBook)
router.delete("/borrar-libro/:bookId", isAuthenticated, bookController.deleteBook)

module.exports = router