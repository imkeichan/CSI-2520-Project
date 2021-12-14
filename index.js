const express = require('express');
const ejs = require("ejs");

//express app
const app = new express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


//home route
app.get("/", (req, res) => {
    res.render("../views/index.ejs");
});

app.get("/Chrome_hearts", (req, res) => {
    res.render("../views/html/Chrome_Hearts.ejs");
});

app.get("/Comme_Des_Garcons", (req, res) => {
    res.render("../views/html/Comme_Des_Garcons.ejs");
});

app.get("/Issey_Miyake", (req, res) => {
    res.render("../views/html/Issey_Miyake.ejs");
});

app.get("/Kapital", (req, res) => {
    res.render("../views/html/Kapital.ejs");
});
app.get("/Maison_Margiela", (req, res) => {
    res.render("../views/html/Maison_Margiela.ejs");
});

app.get("/Number_Nine", (req, res) => {
    res.render("../views/html/Number_Nine.ejs");
});

app.get("/Undercover", (req, res) => {
    res.render("../views/html/Undercover.ejs");
});

app.get("/More_About_Me", (req, res) => {
    res.render("../views/html/More_About_Me.ejs");
});

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> (console.log(`Server started on PORT NO. ${PORT}`)));