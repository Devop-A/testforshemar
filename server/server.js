require('dotenv').config();

const express = require('express');
const app = express();
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const router = require('./routes');
const session = require('express-session')

//middleware to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('../client/build'));

app.use(session({
    secret: 'process.env.SESSION_SECRET',
    resave: false,
    saveUninitialized: true,
    httpOnly: true,
    cookie: { secure: false }
}));

app.use("/", router);

db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
