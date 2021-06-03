'use strict';

const express = require('express');
const router = express.Router();

import { indexController, resultsController } from "../controllers/game";

// define the home page route
router.get('/', (req, res) =>{
  indexController(req, res);
  // res.send("welcome")
});
// define the about route
router.get('/results', (req, res) => {
  resultsController(req, res);
  // res.send('Your results');
});

export default router;