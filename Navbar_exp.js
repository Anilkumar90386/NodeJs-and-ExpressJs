const express=require('express')
const path=require('path')
const app=express()

app.use(express.static('./navbar'))
/*app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
}) */
app.get('*',(req,res)=>{
    res.status(404).send('<h1>Not found</h1>')
})
app.listen(5000,()=>{
    console.log('The port number is listen')
})