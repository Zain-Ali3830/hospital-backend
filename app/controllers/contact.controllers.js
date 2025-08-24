import pool from "../db/index.js";

export const contact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    if (!name || !email || !subject || !message) {
      return res.status(401).send({
        message: "Please fill the complete form ",
      });
    }
    if (!email.includes("@") || !email.includes(".com")) {
      return res.status(401).send({ message: "Please enter a valid email" });
    }
    const result = await pool.query(
      "INSERT INTO contacts (name,email,subject,message) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, email, subject, message]
    );
    return res.status(200).send({
      message: "Your message has been sent successfully",
      contact: result.rows,
    });
  } catch (error) {
    res.send(500).send({
      message: error,
    });
  }
};
