function encrypt(data){
    return 'encrypted data'
}
//could also do module.exports.send = function send(){}
function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}
// module.exports = {
//     send,//gives access to send function when using require function
// };
module.exports = {
    send,
}
