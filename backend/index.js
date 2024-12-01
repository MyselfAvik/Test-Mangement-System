import 'dotenv/config'
import express from 'express'

import "./Models/db.js"
const app=express();

const port=process.env.PORT || 8010

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})