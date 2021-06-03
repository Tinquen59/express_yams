'use strict';

import express from "express";
import router from './routes/index';
import { play } from "./utils";

const app = express(); // une instance d'express
const hostname = "127.0.0.1";
const port = 3000;

// moteur de tpling
app.set('view engine', 'ejs');

// mes assets statics 
app.use(express.static(__dirname + '/public'));

// app.use(express.json()); 

app.use(router);

app.get("/play", (req, res) => {
  play();
  res.redirect("/");
})

app.get("/", async (req, res) => {
    // const collection = await run();
    res.render('pages/index');
})




app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});