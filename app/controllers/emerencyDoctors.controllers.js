import pool from "../db/index.js"
// Add emergency doctors data

export const emergencyDocotors =async (req,res)=>{
    const {name , department} = req.body
    try {
        const result= await pool.query("INSERT INTO depdoctors (name,department) VALUES ($1,$2) RETURNING *",[name,department])
        res.status(200).send({
            message:"Doctor added successfully",
            doctor:result.rows
        })
    } catch (error) {
        res.send(500).send({
            message:error
        })
    }
}




// Doctor Selection on the basis of department
export const getEmergencyDoctors=async (req,res)=>{
    const {department}=req.query;
    try {
        const doctors = await pool.query("SELECT * FROM depdoctors WHERE department=$1", [department]);
        console.log(doctors.rows)
        res.status(200).json(doctors.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete doctor

export const deleteEmergencyDoctors =async (req,res)=>{
    try {
        const doctors = await pool.query("DELETE FROM depdoctors");
        res.status(200).json(doctors.rows);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// delete doctor by id 

export const deleteEmergencyDoctorsById =async (req,res)=>{
    try {
        const {id}=req.query;
        const doctors = await pool.query("DELETE FROM depdoctors WHERE id=$1", [id]);
        res.status(200).json({message:"Deleted Successfully",doctor:doctors.rows});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}