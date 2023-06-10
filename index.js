const express = require('express')
const librarysRoutes = require('./src/routes/librarys-routes')
const booksRoutes = require("./src/routes/books-routes")
const userRoutes = require('./src/routes/users-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/auth/auth')

const app = express()
const port = 3000

initializeAuthentication()

app.use(express.json())
app.use('/library', librarysRoutes)
app.use('/book', booksRoutes)
app.use('/user', userRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
    console.log("API con express corriendo en el puerto " + port);
})