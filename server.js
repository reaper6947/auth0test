const express = require('express')
const app = express()
const path = require("path");
const dotenv = require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT || 3000;
const { auth, requiresAuth } = require('express-openid-connect');

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


app.get("/", homeRoute)
app.get("/profile/",profileRoute)



app.listen(PORT, () => console.log(`server on ${PORT}`));