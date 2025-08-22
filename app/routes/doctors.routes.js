import { getDoctors, getDoctor, addDoctor, deleteDoctor } from "../controllers/doctors.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { Router } from "express";

const router = Router();
router.route("/").get(getDoctors)
router.route("/:spec").get(getDoctor)
router.route("/add").post(upload.fields([{name: "image",maxCount:1}]), addDoctor)
router.route("/delete").delete(deleteDoctor)


export default router;