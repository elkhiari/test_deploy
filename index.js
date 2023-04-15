const express = require("express")
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("app working")
})
app.get('/get',(req,res)=>{
    res.status(200).json({message:"ok"})
})

app.listen(8080,console.log("app os working"))