const express = require("express")
const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))

app.get("/", (require, response) => {
    return response.render("index.html")
})

app.get("/register", (require, response) => {
    return response.render("register.html")
})

app.get("/items", (require, response) => {
    return response.render("items.html")
})

//app.listen(80) - To use like a web server
app.listen(3333) // - Test port