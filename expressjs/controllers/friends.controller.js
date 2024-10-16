const model = require("../models/friends.model");

const friends = model.friends;

function postFriend (req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "invalid input",
        });
    } else {
        const newFriend = {
            id: friends.length,
            name: req.body.name
        }
        friends.push(newFriend);
        res.json(newFriend)
    }
}
function getFriends(req, res){
    res.json(friends);
}
function getFriend (req, res){
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.s
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend,
}