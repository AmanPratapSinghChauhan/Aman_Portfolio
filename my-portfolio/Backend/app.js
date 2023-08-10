import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';

dotenv.config({path:'./Config/config.env'});
const app=express();
app.use(cors({
    origin:`process.env.FRONTEND_URL`,
    
}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/v1',userRoutes);
export default app;
