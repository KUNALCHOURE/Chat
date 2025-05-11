import OpenAI from "openai";
import dotenv from "dotenv"
dotenv.config();


const client = new OpenAI({

    apiKey:process.env.API_KEY,
});


const chatwithai=async(req,res)=>{
    try{
    const {question}=req.body;

const response = await client.chat.completions.create({
    model: "gpt-4",
    messages:[
        {role:"user",content:question}   //dont add {} for adding question the 
                                        // the question can be a string not an object
    ],

});

const ans=(response.choices[0].message.content);

res.status(200).json({response:ans});
    }
    catch(e){
        console.log("Error while getting response from ai ",e.message);
        res.status(500).json({error:"something went wrong"});
        }
    }


export default chatwithai;
