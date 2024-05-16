function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

module.exports = {add, sub}

const fs = require('fs')
// const math = require('./math')
// fs.readFile('math.js','base64url',function(err,data){
//     console.log(data)
// })



// fs.writeFile('newfile.js','good',function(err){
//     console.log('file created')
// })

fs.unlink('newfile.js',function(err){
    console.log('deleted')
})