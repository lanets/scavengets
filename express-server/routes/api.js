// Import dependencies
const express = require('express')
const router = express.Router()

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works, but i don\'t know how security works')
})

module.exports = router
