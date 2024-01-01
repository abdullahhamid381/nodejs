const fs = require('fs');
const path = require('path')

const dirpath = path.join(__dirname,'File')

    fs.writeFileSync(`${dirpath}/app.js`,'hellooo')