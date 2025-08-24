import express from 'express'
import { emergencyDocotors,getEmergencyDoctors , deleteEmergencyDoctors, deleteEmergencyDoctorsById } from '../controllers/emerencyDoctors.controllers.js'
const emergencyDocotorsRouter=express.Router()

emergencyDocotorsRouter.route('/addemergencydoctors').post(emergencyDocotors)
emergencyDocotorsRouter.route('/getemergencydoctors').get(getEmergencyDoctors)
emergencyDocotorsRouter.route('/deleteemergencydoctors').delete(deleteEmergencyDoctors)
emergencyDocotorsRouter.route('/deleteemergencydoctorsbyid').delete(deleteEmergencyDoctorsById)

export default emergencyDocotorsRouter