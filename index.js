const express = require("express");

const app = express() 


app.use(express.static("public"))


app.get('/', (req, res) => {
    res.sendFile("./index.html", {root: __dirname})

})
app.get('/about', (req, res) => {
    res.sendFile("./pages/about.html", {root: __dirname})

})
app.get('/services', (req, res) => {
    res.sendFile("./pages/services.html", {root: __dirname})

})
app.get('/contact', (req, res) => {
    res.sendFile("./pages/contact.html", {root: __dirname})

})





app.listen(7000,  () =>{
    console.log("i am listening....")

})
