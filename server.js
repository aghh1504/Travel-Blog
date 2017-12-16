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
  res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE,GET,OPTIONS");
  next();
});

const reqPath = path.join(__dirname, './data.json');
let savedPosts = JSON.parse(fs.readFileSync(reqPath, 'utf8'));
let savedFavouritePosts = JSON.parse(fs.readFileSync(reqPath, 'utf8'));

const updateItems = (callback) => {
  fs.writeFile(reqPath, JSON.stringify(savedPosts), 'utf8', function(err) {
    if(err) {
      console.log(err);
    }
    callback();
  });
}

// GET FROM DATABASE
app.get("/posts", function(req, res) {
   res.send(savedPosts)
});

app.get("/favourites", function(req, res) {
  res.send(savedFavouritePosts)
});

//ADD NEW
app.post("/posts", function(req, res) {
  const newPost = req.body;
  const newId = Math.max(...savedPosts.map(i => Number(i.id) ? Number(i.id) : 0)) + 1
  newPost.id = newId;
  savedPosts = [newPost, ...savedPosts];
  updateItems(() => res.send(newPost))
});

app.put("/posts/:id", function(req, res) {
  const updateId = req.params.id;
  const existing = savedPosts.find(post => Number(post.id) === Number(updateId));
  if (!existing) {
    return res.status(404).send();
  }
  Object.assign(existing, req.body);
  updateItems(() => res.send(existing))
});

//DELETE
app.delete("/posts/:id", function(req, res) {
  const deleteId = req.params.id;
  savedPosts = savedPosts.filter(post => Number(post.id) !== Number(deleteId));
  updateItems(() => res.send())
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
