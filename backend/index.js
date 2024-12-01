import express from 'express'
const app=express();
import { configDotenv } from 'dotenv';
const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})