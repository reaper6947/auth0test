const express = require('express')
const app = express()
const path = require("path");
const dotenv = require("dotenv").config()
const { auth } = require('express-openid-connect');

const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views"));


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secret,
    baseURL: process.env.baseURL,
    clientID: process.env.clientID,
    issuerBaseURL: process.env.issBaseURL
};





app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(auth(config));


const homeRoute = require("./routes/homeRoute")
const profileRoute = require("./routes/profileRoute");

app.use("/", homeRoute)
app.use("/profile", profileRoute)

// app.get("/callback", (req, res) => {
//     console.log("ok")
//     res.end()
// })


app.listen(PORT, () => console.log(`server on ${PORT}`));