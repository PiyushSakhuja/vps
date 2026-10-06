import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/api/message",(req,res)=>{
    res.json({
        message:"hellow from piyuish:"
    });
})

const PORT = 4000
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})