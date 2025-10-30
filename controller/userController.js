const dbConnection = require("../db/dbconfig");
const bcrypt = require("bcrypt");
const { statusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!username || !firstname || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ msg: "please provide all required information " });
  }
  try {
    const [usuers] = await dbConnection.query(
      "select username,userid from usuers where username = ? or email = ?",
      [username, email]
    );
    if (usuers.length > 0) {
      return res.status(400).json({ msg: "user is already existed!" });
    }
    if (password.length <= 9) {
      return res
        .status(400)
        .json({ msg: "password must be more than 9 character" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPasword = await bcrypt.hash(password, salt);
    await dbConnection.query(
      "INSERT INTO usuers(username,firstname,lastname,email,password) VALUES(?,?,?,?,?)",
      [username, firstname, lastname, email, hashPasword]
    );
    res.status(201).json({ msg: "user created successfull!" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "something went wrong, please try again" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "please provide all required field !" });
  }
  try {
    const [usuers] = await dbConnection.query(
      "SELECT username, userid,  password from usuers where email = ?",
      [email]
    );
     if(usuers.length == 0){
      return res.status(400).json({error:"invalid credentials!"})
     }
      const isMatch = await bcrypt.compare(password,usuers[0].password);
        if(!isMatch){
          return res.status(400).json({error:"invalid credentials!"})
        }
        const username = usuers[0].username;
        const userid = usuers[0].userid;
        const token = jwt.sign({username,userid},process.env.JWT_SECRET,{expiresIn : "1d"});
        return res.status(201).json({msg:"user login successfully!",token ,username})
        // return res.json({usuers});
  } catch {
    return res
      .status(500)
      .json({ msg: "something went wrong, please try again" });
  }
}

async function check(req, res) {
  const username = req.user.username;
  const userid = req.user.userid;
   res.status(201).json({msg:"valid user",username,userid})
}

module.exports = { register, login, check };
