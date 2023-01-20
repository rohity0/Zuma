const express = require("express");
const cors = require("cors");
const dbConnect = require("../config/dbConnect");
const register = require("./Routes/register");
const app = express();
const PORT = process.env.Port || 8000;

app.use(cors());
app.use(express.json());

// register api
app.use("/register", register)

app.get("/", (req, res)=>[
      res.send("welcome")
])


app.listen(PORT , async ()=>{
   await dbConnect();
     console.log(PORT)
})

