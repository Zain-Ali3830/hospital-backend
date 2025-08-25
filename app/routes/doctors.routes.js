import { getDoctors, getDoctor, addDoctor, deleteDoctor, updateDoctor, doctorAppointment } from "../controllers/doctors.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { Router } from "express";

const router = Router();
router.route("/").get(getDoctors)
router.route("/getdoctor:spec").get(getDoctor)
router.route("/adddoctor").post(upload.fields([{name:"image",maxCount:1}]), addDoctor)
router.route("/deletedoctor").delete(deleteDoctor)
router.route("/updatedoctor").put(upload.fields([{name: "image",maxCount:1}]), updateDoctor)
router.route("/doctorappointment").post(doctorAppointment)


export default router;