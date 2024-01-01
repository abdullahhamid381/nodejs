const fs = require('fs');
const path = require('path')

const dirpath = path.join(__dirname,'File')
const filepath = `${dirpath}/app.js`
    fs.writeFileSync(`${filepath}`,'hellooo')