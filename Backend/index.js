import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config();


app.get("/",(req,res)=>{
    console.log("hello");
})



app.listen(3000,()=>{
    console.log("server is listening ");
})
