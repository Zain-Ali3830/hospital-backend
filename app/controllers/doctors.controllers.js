import pool from "../db/index.js";
import dotenv from "dotenv";
dotenv.config();

// get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await pool.query("SELECT * FROM doctors");
    res
      .status(200)
      .json({ message: "Doctors fetched successfully", doctors: doctors.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add doctor
export const addDoctor = async (req, res) => {
  try {
    const { name, spec, fee, deg, exp, avail } = req.body;
    const picurl = req.files?.image[0].path;
    console.log(picurl);
    const newDoctor = await pool.query(
      "INSERT INTO doctors (name ,image , spec, fee, deg, exp,avail) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [name, picurl, spec, fee, deg, exp, avail]
    );
    res.status(201).json(newDoctor.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get doctor
export const getDoctor = async (req, res) => {
  try {
    const { spec } = req.query;
    const doctors = await pool.query("SELECT * FROM doctors WHERE spec=$1", [
      spec,
    ]);
    res.status(200).json(doctors.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.query;
    const doctors = await pool.query("DELETE FROM doctors WHERE id=$1", [id]);
    res
      .status(200)
      .json({ message: "Deleted Successfully", doctor: doctors.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Doctor
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, spec, fee, deg, exp, avail } = req.body;
    const image = req.files?.image[0].path;
    const doctors = await pool.query(
      `UPDATE doctors
   SET 
     name = COALESCE($1, name),
     image = COALESCE($2, image),
     spec = COALESCE($3, spec),
     fee = COALESCE($4, fee),
     deg = COALESCE($5, deg),
     exp = COALESCE($6, exp),
     avail = COALESCE($7, avail)
   WHERE id = $8
   RETURNING *`,
      [name, image, spec, fee, deg, exp, avail, id]
    );

    res.status(200).json({ message: "Updated Successfully", doctor: doctors.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const doctorAppointment=async (req,res)=>{
  const {name , email , phone}=req.body;
  try {
    const appointment=await pool.query("INSERT INTO docappointment (name , email , phone) VALUES ($1,$2,$3) RETURNING *" , [name , email , phone])
    return res.status(201).json({message:"Appointment Booked Successfully",patient:appointment.rows});
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}