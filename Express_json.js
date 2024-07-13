const express=require('express')
const app=express()
const {products}=require('./data1')
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="./api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct=products.map((product)=>{
        const {id,name,age,cgpa}=product;
        return {id,name,age,product}
    })
    res.json(newProduct)
})
app.get('/api/products/:id/:productId',(req,res)=>{
    const {ProductId}=req.params
    const singleProduct=products.find((product)=>product.name===Number(ProductId))
    console.log(singleProduct)
    if(!singleProduct)
        {
           return res.status(404).send('<h1>Poduct not found</h1>')
        }
    res.json(singleProduct)
})

app.listen(4000)