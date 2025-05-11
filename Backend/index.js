import express from 'express';
import dotenv from 'dotenv';
import chatwithai from './chat.js';
import cors from 'cors';

dotenv.config();
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
    
}));
app.use(express.json());

app.post("/chat",chatwithai);


app.get("/",(req,res)=>{
    console.log("hello");
})



app.listen(3000,()=>{
    console.log("server is listening ");
})
