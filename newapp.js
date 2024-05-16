const express = require('express')
const app = express()


app.use(express.static(__dirname+'/test'))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/test/index.html')
    
}).listen(9000)
console.log('Enigma simulator is starts running...')