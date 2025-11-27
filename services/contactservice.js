const nodemailer = require("nodemailer");
const { adminTemplate, userTemplate } = require("../utils/contact");
require("dotenv").config();

exports.sendApplicationenquiry = async ({ name, email, mobile, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      family: 4, 
    });

    const adminMailOptions = {
      from: `"Microbrange" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Inquiry Received",
      html: adminTemplate({ name, email, mobile, message }),
    };

    const userMailOptions = {
      from: `"Microbrange" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You For Contacting Microbrange",
      html: userTemplate({ name }),
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log("Emails sent successfully!");
    return { success: true };

  } catch (error) {
    console.error("Email Sending Error:", error);
    throw new Error("Failed to send enquiry email");
  }
};
