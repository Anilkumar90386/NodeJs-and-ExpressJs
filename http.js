const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/')
        {
            res.end("Hello welocme to home page")
        }
   if(req.url==='/about')
   {
    res.end('Here is the about pag')
   }
   res.end(`
       <h1>Opps!</h1>
       <a href='/'>Back</a>
    `)
})
server.listen(3000)