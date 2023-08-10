import {sendEmail} from "../utils/sendEmail.js";
import dotenv from 'dotenv';
dotenv.config({path:'./Config/config.env'}); 
console.log(process.env.FRONTEND_URL);
export const sendMail= async(req,res)=>{
    const {name,email,subject,message}=req.body;
    try{
        await sendEmail({name,email,subject,message}
        );
        return res.json({success:true});
       
        
    }
    catch(error){
        return res.json({success:true,msg:error});
    }
}