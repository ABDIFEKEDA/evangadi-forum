const dbConnection = require('../db/dbconfig');
const jwt = require('jsonwebtoken');

async function getQuestion(req, res) {
    const { questionid, userid, title, description, tag } = req.body;

    if (!questionid || !userid || !title || !description || !tag) {
        return res.status(400).json({ msg: "Please provide all necessary information!" });
    }

    try {
        
         await dbConnection.query(
            "INSERT INTO questions (questionid, userid, title, description, tag) VALUES (?, ?, ?, ?, ?)",
            [questionid, userid, title, description, tag]
        );

        res.status(201).json({ msg: "Question posted successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error!" });
    }
}

module.exports =  {getQuestion};
