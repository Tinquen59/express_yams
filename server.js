'use strict';

import express from "express";
import router from './routes/index';
import * as play from "./utils";
import cookieSession from "cookie-session";


const app = express(); // une instance d'express
const hostname = "127.0.0.1";
const port = 3000;

app.set('trust proxy', 1);

app.use(cookieSession({
  name: 'req.session',
  keys: ['game']
}))


// moteur de tpling
app.set('view engine', 'ejs');

// mes assets statics 
app.use(express.static(__dirname + '/public'));
app.use(router);

app.get("/play", (req, res) => {
  res.redirect("/");
})

app.get("/", async (req, res) => {
    res.render('pages/index');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});