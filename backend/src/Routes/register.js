const { application } = require("express");
const express = require("express");
const Users = require("../Schema/user");

const register = express.Router();

register.get("/", (req, res)=>[
    res.send("welcome2")
])


register.post("/", async (req, res)=>{
          let {name, email, password} = req.body;
             let  validUser = await Users.find({email: email});
               if(validUser.length===0){
                     let newUser = new Users(req.body);
                       await newUser.save();
                       res.status(200).send("User Created")
               }
});




module.exports = register