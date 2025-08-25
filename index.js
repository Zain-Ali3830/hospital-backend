import express from 'express'
import router from './app/routes/doctors.routes.js';
import appointmentRouter from './app/routes/appointments.routes.js';
import emergencyDocotorsRouter from './app/routes/emergencyDoctors.routes.js';
import contactRouter from './app/routes/contact.routes.js';
import cors from 'cors'
const app=express();
app.use(cors({origin:"https://hospital-site-production-d019.up.railway.app/"}))
app.use(express.json());

const port=process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Backend is live and running!',
    status: 'success'
  });
});
app.use("/api/doctors",router)
app.use("/api",appointmentRouter)
app.use("/api",emergencyDocotorsRouter)
app.use("/api",contactRouter)
app.listen(port,()=>console.log(`Server is running on port ${port}`))
