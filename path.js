// const fs = require('fs')
// const path= require('path')

// const dirpath = path.join(__dirname,'files')
// for(i=0;i<=5;i++){
//     fs.writeFileSync(`${dirpath}/new${i}.js`,'hwell')
// }

// // fs.readdir(dirpath,(err,file)=>{
// // if(file){
// //     file.forEach((item)=>{
// //         console.log(item)
// //     })
// // }
// // else{
// //  console.log(err+'errr')
// // }
// // })

// fs.readdir(dirpath,(err,file)=>{
 
//         file.forEach((item)=>{
//             console.log(item)
//         })
    
//     })

const path = require('path')
const fs = require('fs')
const dirpath = path.join(__dirname,'files')
console.log(dirpath)

for(i=0;i<=5;i++){
    fs.writeFileSync(`${dirpath}/hello${i}.js`,'helo')
}

fs.readdir(dirpath,(err,file)=>{
   file.forEach((item)=>{
    console.log(item)
   })
})