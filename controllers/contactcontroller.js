const contactservice = require("../services/contactservice");

exports.submitApplication = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const errors = {};
    if (!name?.trim()) errors.name = "Name is required";
    if (!email?.trim()) errors.email = "Email is required";
    if (!mobile?.trim()) errors.mobile = "Mobile is required";
    if (!message?.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    await contactservice.sendApplicationenquiry({
      name, email, mobile, message,
    });

    return res.json({ message: "Application submitted successfully" });

  } catch (error) {
    // Error suppressed: do not log to console
    return res.status(500).json({ error: "Something went wrong" });
  }
};
