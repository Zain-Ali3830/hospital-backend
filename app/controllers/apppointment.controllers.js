import pool from "../db/index.js";


// Doctor Appointment
export const appointment=async (req,res)=>{
    const {name , email , phone , date ,doctor, department,message}=req.body;
    try {
        if(!name||!email||!phone||!date||!doctor||!department){
            console.log(name,email,phone,date,doctor,department)
          return  res.status(401).send({
                message:"Please fill the complete form "
            })
        }

        const check= await pool.query("SELECT * FROM appointments WHERE email=$1 AND date=$2 AND doctor=$3 AND department=$4 ",[email,date,doctor,department]);
        if(check.rows.length>0){
          return  res.send({
                message:`Your appointment with ${doctor} on ${date} is already booked.`
            })
        }

        const result=await pool.query("INSERT INTO appointments (name , email , phone , date ,doctor, department,message) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *" , [name , email , phone , date , doctor, department,message])
        console.log(result.rows)
       return res.send({
            message:"Appointment Booked Successfully",
            patient:result.rows,
        })

    } catch (error) {
       return res.status(500).send({
            message:error,
        })
    }
}


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
export const getDoctors=async (req,res)=>{
    const {department}=req.query;
    try {
        const doctors = await pool.query("SELECT * FROM depdoctors WHERE spec=$1", [department]);
        res.status(200).json(doctors.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}