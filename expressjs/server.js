//if file is named "server.js" npm start will run the file
const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();//creates server

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

//middleware example
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${end}ms`);
});
//app.use('/site', express.static(path.join(__dirname, 'public')));
app.use('/index', (req, res) =>{
    res.render("index", {
        title: "My Friends are Awesome!",
        caption: "Just an Incredible View!"
    });
});
app.use(express.json())


app.use('/friends', friendsRouter);//routers allow us to use them only under a specific path
app.use("/messages", messagesRouter);
//routers help modularization
//why do we do this? this allows this portion of the app to be self contained
app.listen(PORT, () => console.log("The server is listening..."));
