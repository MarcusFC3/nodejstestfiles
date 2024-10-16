const http = require('http');

const PORT = 3000;

const server = http.createServer()

const friends = [{
    id: 0,
    name: 'Rick',
},
{
    id: 1,
    name: 'Glen'
},]

server.on('request', (req, res) => {//req is a readable stream, res is a writable stream.
    //req are sent by clients to trigger actions on the server,
    //responses are the answers from the server
    const items = req.url.split("/");
    // /friends/2 === ['','friends','2']
    console.log(items)

    if (req.method === "POST" && items[1] === 'friends') {
        /*
        * This if statement handles post requests and will 
        * return them as a response.
        * example: 
        * fetch('http://localhost:3000/friends',
        * {
        *    method: 'Post', 
        *    body: JSON.stringify({id: 2, name: 'Grace Hopper'})
        * })
        * .then((response) => response.json())
        * .then((friend) => console.log(friend))
        */
        req.on('data', (data) => {
            friend = data.toString();
            console.log('request: '+ friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res)//sends post request result as a response
        //data goes from request straight to client
    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        if (items.length === 3){
            res.end(JSON.stringify(friends[Number(items[2])]));
        }else{
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] === 'messages'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body>')
        res.write('<p style=" color: blue; text-align: center; width: 300px; margin: 0 auto;">This is a message you crazy mug!</p>')
        res.write('<body>')
        res.write('<html>')
        res.end()
    } else{
        res.statusCode = 404;
        res.end()
    }
})

server.listen(PORT, () => { { console.log("Server has begun listening...") } }); //127.0.0.1 => localhost
