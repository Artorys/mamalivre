const handlebars = require("express-handlebars")
const express = require("express")
const app = express()

app.use(express.static("home"))
app.use(express.static("theboxer"))

app.get("/", function(req, res)
{
    res.sendFile(__dirname +"/home/home.html")

})
app.get("/theboxer", function(req, res)
{
    res.sendFile(__dirname +"/theboxer/theboxer.html", 
    {
    })
})

