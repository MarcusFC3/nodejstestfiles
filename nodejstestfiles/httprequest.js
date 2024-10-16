// const http = require('https');
// const request = http.request('https://www.google.com/', (res)=>{

const { request } = require('https');
const req = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`\n\ndata chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});

req.end();//causes request to be sent.