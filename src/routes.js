const express = require('express')
const router = express.Router()

router.use('/user', require('./controllers/user'));
router.use('/', require('./controllers/login'));

module.exports = router;