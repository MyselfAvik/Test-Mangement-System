import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser';
import "./Models/db.js"
import cors from "cors"
const app=express();

const port=process.env.PORT || 8010
app.use(bodyParser.json())
app.use(cors())
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})