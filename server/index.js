require("dotenv").config();
const express = require("express");
const session = require("express-session");
const checkForSession = require("./middlewares/checkForSession")
const swagController = require('./controllers/swagController')

const app = express;

let {SERVER_PORT, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(
    secret({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
)
app.use(checkForSession)

// ENDPOINTS
app.get('/api/swag', swagController.read)

app.listen(SERVER_PORT, () => {
    console.log (`${SERVER_PORT} voices suddenly cried out in terror and were suddenly silenced.`)
})