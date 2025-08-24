import express from 'express';
import { appointment } from '../controllers/apppointment.controllers.js';

const appointmentRouter=express.Router()

appointmentRouter.route('/appointment').post(appointment)
export default appointmentRouter