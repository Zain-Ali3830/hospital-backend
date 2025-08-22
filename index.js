import express from 'express'
import router from './app/routes/doctors.routes.js';
const app=express();
app.use(express.json());

const port=process.env.PORT || 4000;
