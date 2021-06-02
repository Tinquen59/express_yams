const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', (req, res) =>{
  res.send('Welcome Homepage');
});
// define the about route
router.get('/results', (req, res) => {
  res.send('Your results');
});

module.exports = router;