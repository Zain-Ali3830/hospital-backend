export const generalAppointment=async(req,res,next)=>{
 const {name , email , phone}=req.body;
  if(!name||!email||!phone){
    return res.status(401).json({message:"Please fill the complete form "});
  }
  if(phone.length!==11){
    return res.status(401).json({message:"Please enter a valid phone number "})
  }
    if(!email.includes('@')||!email.includes(".com")){
          return  res.status(401).send({message:"Please enter a valid gmail"})
        }
        next()
}