const express = require('express');
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('<h1>you x design</h1>')
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
