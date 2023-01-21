const express = require("express");
const Todos = require("../Schema/Post");

const Todo = express.Router();

Todo.get("/", (req, res)=>{

});



Todo.post("/", async(req, res)=>{
    let [id, email,name] = req.headers.token.split(":");
    console.log(id)
    let  post = req.body;
          post = {
            ...post,
            createdBy: id,
          };
             try{
                      let newPost = Todos(post);
                          await newPost.save();
                          res.send(newPost)
             }catch(e){
                   res.send(e.message)
             }
});


module.exports = Todo    
