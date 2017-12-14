var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const reqPath = path.join(__dirname, './data.json');
let savedPosts = JSON.parse(fs.readFileSync(reqPath, 'utf8'));
let savedFavouritePosts = JSON.parse(fs.readFileSync(reqPath, 'utf8'));

const updateItems = res => {
  fs.writeFile(reqPath, JSON.stringify(savedItems), 'utf8', function(err) {
    if(err) {
      console.log(err);
    }
    res.send('ok')
  });
}

// GET FROM DATABASE
app.get("/GetAllPosts", function(req, res) {
   res.send(savedPosts)
});

app.get("/GetFavouritePosts", function(req, res) {
  res.send(savedFavouritePosts)
});

//ADD NEW
app.post("/AddNewPost", function(req, res) {
  const newPost = req.body.post;
  const newId = Math.max(...savedPosts.map(i => i.id ? i.id : 0)) + 1
  savedPosts = [...savedPosts, {id: newId,checked: false,description:newPost.description, image:newPost.image, favourite:false}].reverse();
  updateItems(res)
});

app.put("/UpdatePost", function(req, res) {
  const updateId = req.body.id
  savedPosts = savedPosts.filter(post => post.id !== UpdateId)
  updateItems(res)
});

//DELETE
app.delete("/Post/:postId", function(req, res) {
  const deleteId = req.body.id
  savedPosts = savedPosts.filter(post => post.id !== deleteId)
  updateItems(res)
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
