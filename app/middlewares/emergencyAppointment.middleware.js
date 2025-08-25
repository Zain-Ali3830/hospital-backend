export const emergencyAppointment = async (req, res, next) => {
  const { name, email, phone, date, doctor, department, message } = req.body;

  if (!name || !email || !phone || !date || !doctor || !department) {
    console.log({ name, email, phone, date, doctor, department });
    return res.status(401).send({
      message: "Please fill the complete form",
    });
  }

  if (phone.length !== 11) {
    return res.status(401).send({ message: "Please enter a valid phone number" });
  }

  if (!email.endsWith("@gmail.com")) {
    return res.status(401).send({ message: "Please enter a valid Gmail address" });
  }

  next();
};
