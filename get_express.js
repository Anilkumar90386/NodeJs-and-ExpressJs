const express=require('express')
const app=express()
const {products}=require('./Express_data')
app.get('/api/products',(req,res)=>{
    res.status(404).json(products)
})

app.listen(5000)