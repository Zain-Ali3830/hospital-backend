import pool from "../db/index.js";
import dotenv from "dotenv";
dotenv.config();


// get all doctors
export const getDoctors = async (req, res) => {
    try {
        const doctors = await pool.query("SELECT * FROM doctors");
        res.status(200).json(doctors.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// add doctor
export const addDoctor =async (req,res)=>{
    try {
        const {name ,image , spec, fee, deg, exp,awail}=req.body;
        const newDoctor = await pool.query("INSERT INTO doctors (name ,image , spec, fee, deg, exp,awail) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [name ,image , spec, fee, deg, exp,awail]);
        res.status(201).json(newDoctor.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// get doctor
export const getDoctor =async (req,res)=>{
    try {
        const {spec}=req.query;
        const doctors = await pool.query("SELECT * FROM doctors WHERE spec=$1", [spec]);
        res.status(200).json(doctors.rows);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// delete doctor
export const deleteDoctor =async (req,res)=>{
    try {
        const {id}=req.query;
        const doctors = await pool.query("DELETE FROM doctors WHERE id=$1", [id]);
        res.status(200).json(doctors.rows);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update Doctor
export const updateDoctor =async (req,res)=>{
    try {
        const {id}=req.query;
        const {name ,image , spec, fee, deg, exp,awail}=req.body;
        const doctors = await pool.query("UPDATE doctors SET name=$1 ,image=$2 , spec=$3, fee=$4, deg=$5, exp=$6,awail=$7 WHERE id=$8", [name ,image , spec, fee, deg, exp,awail,id]);
        res.status(200).json(doctors.rows);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}