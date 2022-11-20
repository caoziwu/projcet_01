const express = require('express')
const router = express.Router()
router.get('/index.html', (req, res) => {
    res.send('<h1>这是首页router</h1>')
})
module.exports = router