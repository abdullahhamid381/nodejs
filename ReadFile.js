const fs = require('fs');
const path = require('path')

const dirpath = path.join(__dirname,'File')
const filepath = `${dirpath}/app.js`
    fs.writeFileSync(`${filepath}`,'hellooo')
    fs.readFile(filepath,'utf8',(err,item)=>{
        console.log(item)
    })
    fs.appendFile(filepath,'heloo world',(err)=>{
        if(err){
            console.log('error is genrated')
        }
        else{
            console.log('file is updated')
        }
    })
    fs.rename(filepath,`${dirpath}/fruit.js`,(err)=>{
        if(err){
            console.log('error is genrated')
        }
        else{
            console.log('name is updated')
        }
    })