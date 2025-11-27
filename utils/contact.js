exports.adminTemplate = ({ name, email, mobile, message }) => `
  <div style="font-family: Arial, sans-serif; background:#f4f6fb; padding:20px;">
    <div style="max-width:650px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.15);">
      
      <!-- Header -->
      <div style="background:#1D3A69; padding:20px; text-align:center;">
        <h2 style="color:#fff; margin:0; font-size:22px; letter-spacing:0.5px;">New Inquiry Received</h2>
      </div>
      
      <!-- Body -->
      <div style="padding:25px;">
        <p style="font-size:16px; color:#333; margin-bottom:20px;">
          You have received a new contact form submission. Here are the details:
        </p>
        
        <table style="width:100%; border-collapse:collapse; font-size:15px;">
          <tr>
            <td style="padding:12px; border:1px solid #e1e1e1; background:#f7f9fc; font-weight:bold; color:#1D3A69;">Full Name</td>
            <td style="padding:12px; border:1px solid #e1e1e1;">${name}</td>
          </tr>
          <tr>
            <td style="padding:12px; border:1px solid #e1e1e1; background:#f7f9fc; font-weight:bold; color:#1D3A69;">Email</td>
            <td style="padding:12px; border:1px solid #e1e1e1;">${email}</td>
          </tr>
          <tr>
            <td style="padding:12px; border:1px solid #e1e1e1; background:#f7f9fc; font-weight:bold; color:#1D3A69;">Mobile</td>
            <td style="padding:12px; border:1px solid #e1e1e1;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding:12px; border:1px solid #e1e1e1; background:#f7f9fc; font-weight:bold; color:#1D3A69;">Message</td>
            <td style="padding:12px; border:1px solid #e1e1e1;">${message}</td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="background:#f1f3f9; text-align:center; padding:12px;">
        <p style="margin:0; font-size:14px; color:#555;">© ${new Date().getFullYear()} Microbrange | Confidential</p>
      </div>
    </div>
  </div>
`;


exports.userTemplate = ({ name }) => `
  <div style="font-family: Arial, sans-serif; background:#f4f6fb; padding:20px;">
    <div style="max-width:650px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.15);">
      
      <!-- Header -->
      <div style="background:#1D3A69; padding:20px; text-align:center;">
        <h2 style="color:#fff; margin:0; font-size:22px;">Thank You, ${name}!</h2>
      </div>
      
      <!-- Body -->
      <div style="padding:25px; color:#333; text-align:center;">
        <p style="font-size:16px; margin-bottom:10px;">We’ve received your inquiry successfully.</p>
        <p style="font-size:15px; margin-bottom:20px;">Our team will review your request and get back to you at the earliest.</p>
        
        <div style="margin:25px 0; padding:18px; border:1px solid #dfe3f0; border-radius:8px; background:#f9f9ff;">
          <p style="margin:0; font-size:16px; color:#004BC2; font-weight:bold;">Microbrange Team</p>
          <p style="margin:6px 0 0; font-size:13px; color:#555;">Delivering Digital Excellence</p>
        </div>

        <p style="margin-top:20px; font-size:14px; line-height:1.6;">
          We truly appreciate your interest in <b>Microbrange</b>.  
          A representative will be in touch with you very soon.
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f3f9; text-align:center; padding:12px;">
        <p style="margin:0; font-size:14px; color:#555;">© ${new Date().getFullYear()} Microbrange</p>
      </div>
    </div>
  </div>
`;
