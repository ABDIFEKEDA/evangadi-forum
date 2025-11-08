const express = require('express');
const router = express.Router()
const {getQuestion}  = require('../controller/questionController.js');
const authMiddleware = require('../middleware/authMidleware.js');


router.get('/all-questions' ,authMiddleware,getQuestion);
module.exports = router