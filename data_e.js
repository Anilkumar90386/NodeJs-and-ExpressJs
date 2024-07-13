const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).send("Home page")
})
app.get('/about',(req,res)=>{
    res.status(300).send("About page")
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Not found</h1>')
})
app.listen(3000)