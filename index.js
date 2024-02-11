require('dotenv').config()
const express = require('express')
const app = express()
const port = 2288
app.get('/',(req ,res)=>{
    
res.send('hello world!')
})
app.get('/twitter',(req,resp)=>{
    resp.send('hrishika.com')
})
app.get('/login',(req,resp)=>{
    resp.send('<h1>please login at cand c</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log('example of app listning ${port}' )
})
