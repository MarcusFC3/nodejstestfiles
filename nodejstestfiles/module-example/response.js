function decrypt(data){
    return 'encrypted data'
}
//could also do module.exports.read = function read(){}
function read(){
    return decrypt('data')
}
module.exports = {
    read,//gives access to read function when using require function
}