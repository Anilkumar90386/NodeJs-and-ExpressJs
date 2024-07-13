const express=require('express')
const app=express()

app.use(express.static('./navbar/index.html'))


app.listen(5000)