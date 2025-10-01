
import nodemailer from "nodemailer"
const sendotpuser=async(email,otpnuumerfloor)=>
{
    console.log("otp"+otpnuumerfloor)
 console.log("emai"+email)
 const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'emilio.bogisich8@ethereal.email',
      pass: '6xRuZCtsMHw1kYHsDF'
  }
});
// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from:"6xRuZCtsMHw1kYHsDF",
    to:email.trim(),
    subject: "OTP SEND",
    text:`the otp of is ${otpnuumerfloor}`, // plain‑text body
    html:`the otp of is ${otpnuumerfloor}`, // HTML body
  });

  console.log("Message sent:", info.messageId);
})();
}
export default sendotpuser;