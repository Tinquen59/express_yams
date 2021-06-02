const express = require("express");
const router = require('./routes/index');
const run = require('./connect');

const app = express(); // une instance d'express
const hostname = "127.0.0.1";
const port = 3000;

// moteur de tpling
app.set('view engine', 'ejs');

// mes assets statics 
app.use(express.static(__dirname + '/public'));

// app.use(express.json()); 

app.use("/yams", router);

app.get("/", async (req, res) => {
    const collection = await run();
})


app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});