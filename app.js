

require("dotenv").config()
const express = require("express");
const app = express();
const dbConnection = require("./db/dbconfig");
const port = 3006;
const cors = require("cors")

app.use(cors())

app.use(express.json());
// user routes middleware
const userRoutes = require("./routes/userRoutes");
// user middle waer
app.use("/api/users", userRoutes);
// question routes middleware
const questionRoutes = require('./routes/questionRoutes')

app.use('/api/question/' ,questionRoutes)


async function Starter() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    app.listen(port);
    console.log("database is connected successfull!");
    console.log(`server is running on port ${port}`);
  } catch(error){
    console.log(error.message);
  }
}

Starter();
