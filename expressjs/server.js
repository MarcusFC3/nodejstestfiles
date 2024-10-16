//if file is named "server.js" npm start will run the file
const express = require("express");
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();//creates server

const PORT = 3000;

//middleware example
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
    console.log(`${req.method} ${req.url} ${end}ms`);
});

app.use(express.json())

const freindsRouter  = express.Router();

//post requests
app.post("/friends",friendsController.postFriend);
//res.json ensures content will be read as json conent type
app.get('/friends', friendsController.getFriends);




app.get("/friends/:friendId", friendsController.getFriend);

//res.send will use application/json content type for json objects
//res.send will use content type text/html for string
app.get("/messages", messagesController.getMessages)
app.post("/messages", messagesController.postMessages);


app.listen(PORT, () => console.log("The server is listening..."));
