const api =require('http')
const appdata = require ('./app')

// const fs = require('fs')
// const server = require('http')
// 


// // ARAAY===================================================

// const arr = [1,1,1,1,2,3,4]
// console.log(arr[0])
// const filte= arr.filter((item)=>{
//     return item===1

// })

// console.log(filte)

// // core module================================================

// fs.writeFileSync('app.js','hello')


// // CREARTE SERVER=====================================================


// // FIRST WAY FOR CREATE SERVER


// server.createServer((req,resp)=>{
// resp.write('<h1>hello abdullah</h1>');
// resp.end();
// }).listen(5000);

// // SECOND WAY OF CREATE SERVER with function


// // simple api createion


api.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application/json'})
resp.write(JSON.stringify(appdata.data));
resp.end();
}).listen(4000);







