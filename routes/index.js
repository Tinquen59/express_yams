'use strict';

const express = require('express');
const router = express.Router();

import { indexController } from "../controllers/game";

// middleware spécifique au router
router.use( (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', (req, res) =>{
  indexController(req, res);
  // res.send("welcome")
});
// define the about route
router.get('/results', (req, res) => {
  res.send('Your results');
});

export default router;