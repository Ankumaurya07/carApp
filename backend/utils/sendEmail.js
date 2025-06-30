import nodemailer from 'nodemailer';

export const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Carwale Team" <no-reply@carwale.com>',
    to: email,
    subject: 'Your Carwale OTP Verification',
    text: `Your OTP code is: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};
