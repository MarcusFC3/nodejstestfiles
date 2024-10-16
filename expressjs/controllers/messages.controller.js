
//res.send will use application/json content type for json objects
//res.send will use content type text/html for string
function getMessages(req, res){
    res.send('<html><body><ul><li><p>Hello! Im in a list!</p></li></ul></body></html>')
}
function postMessages(req, res){
    console.log("updating message board...")
};

module.exports = {
    getMessages,
    postMessages
}