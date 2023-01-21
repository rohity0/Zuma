const express = require("express");
const Todos = require("../Schema/Post");

const Todo = express.Router();

Todo.get("/", async (req, res)=>{
      let [id, email,name] = req.headers.token.split(":");
           try{
               let  data = await Todos.find({createdBy: id});
                      res.send(data);
           }catch(e){
                       res.send(e.message);
           }
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
