const express = require("express")
const app = express()

app.use(express.static('public'));
app.set('views','/views')

app.get("/", (require, response) => {
    return response.render('index.html')
})

//app.listen(80) - To use like a web server
app.listen(3333) // - Test port