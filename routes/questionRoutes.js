const express = require('express');
const router = express.Router()
const authMiddleware = require('../middleware/authMidleware');


router.get("/all-questions",authMiddleware,(req,res)=>{
   return res.send("all questions");
})
module.exports = router