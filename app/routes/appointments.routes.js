import express from 'express';
import { appointment } from '../controllers/apppointment.controllers.js';
import { emergencyAppointment } from '../middlewares/emergencyAppointment.middleware.js';

const appointmentRouter=express.Router()

appointmentRouter.route('/appointment').post(emergencyAppointment,appointment)
export default appointmentRouter