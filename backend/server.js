const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sendEmail } = require("./testEmail");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// POST route to handle form submission
app.post("/send", (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const htmlMessage = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  sendEmail(email, subject, htmlMessage, "");

  res.status(200).json({ message: "Message sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
