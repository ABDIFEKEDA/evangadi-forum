const express = require('express');
const { login ,register,check } = require('../controller/userController');
const authMiddleware = require("../middleware/authMidleware")


const router = express.Router();


router.post('/login',login)
router.post('/register',register)
router.get('/checkUsers',authMiddleware,check)
module.exports = router;