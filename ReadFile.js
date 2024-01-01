const fs = require('fs');
const path = require('path')

const dirpath = path.join(__dirname,'File')
for(i=0;i<=10;i++){
    fs.unlinkSync(`${dirpath}/app${i}.js`,'hellooo')
}