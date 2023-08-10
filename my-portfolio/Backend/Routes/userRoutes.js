import express from 'express';
import {sendMail} from '../Controllers/userController.js';
const router=express.Router();

router.route('/sendmail').post(sendMail);

export default router;