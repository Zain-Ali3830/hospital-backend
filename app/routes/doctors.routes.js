import { getDoctors, getDoctor, addDoctor, deleteDoctor, updateDoctor } from "../controllers/doctors.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { Router } from "express";

const router = Router();
router.route("/").get(getDoctors)
router.route("/:spec").get(getDoctor)
router.route("/add").post(upload.fields([{name: "image",maxCount:1}]), addDoctor)
router.route("/delete").delete(deleteDoctor)
router.route("/update").put(upload.fields([{name: "image",maxCount:1}]), updateDoctor)


export default router;