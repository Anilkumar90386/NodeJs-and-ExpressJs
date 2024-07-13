const express=require('express')
const app=express()
const logger=require('./Ex_logger')
const authorize=require('./Express_authorize')
app.use([logger,authorize])
app.get('/',(req,res)=>{
    res.send(req.user)
})
app.get('/about',(req,res)=>{
    res.send('about ')
})

app.listen(5000)