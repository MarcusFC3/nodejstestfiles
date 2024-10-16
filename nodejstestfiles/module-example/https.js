const Connection = require('mysql/lib/Connection.js');
const {send} = require('./request.js');
const {read} = require('./response.js');
const sql = Connection('')
function req(url, data){

    send('https/www.google.com', 'secret data')
    return read();
    
}
console.log(req('dude','data'));

