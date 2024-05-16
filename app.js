const express = require('express')
const bodyParser = require('body-parser')
const app = express()



app.use(express.static(__dirname + '/html'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/html/index.html')
})

app.post('/',function(req,res){
    const name = req.body.yourname
    const mail = req.body.youremail
    const data = 'Hello '+name+', thank you for subscribing using ' +mail
    console.log(data)
    res.send(data)
})

app.listen(9000,function(req,res){
    console.log('server running..')
})





