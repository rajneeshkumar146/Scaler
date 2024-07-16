const nodemailer = require("nodemailer");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const { SENDGRID_API_KEY } = process.env;
console.log("key",SENDGRID_API_KEY)

function replaceContent(content, creds) {
  // {name:"John", otp: 1234}
  const allKeysArr = Object.keys(creds);
  allKeysArr.forEach(function (key) {
    content = content.replace(`#{${key}}`, creds[key]);
  });
  return content;
}

async function EmailHelper(templateName, receiverEmail, creds) {
  try {
    console.log("Receive email: ", receiverEmail, creds);
    const templatePath = path.join(__dirname, "email_templates", templateName);
    let content = await fs.promises.readFile(templatePath, "utf-8");
    const emailDetails = {
      to: receiverEmail,
      from: "jasbir.singh@scaler.com",
      subject: "Mail from ScalerShows",
      text: `Hi ${creds.name} this your reset otp ${creds.otp}`,
      html: replaceContent(content, creds),
    };
    const transportDetails = {
      host: "smtp.sendgrid.net",
      port: 465,
      auth: {
        user: "apikey",
        pass: SENDGRID_API_KEY,
      },
    };

    const transporter = nodemailer.createTransport(transportDetails);
    await transporter.sendMail(emailDetails);
    console.log("email sent");
  } catch (err) {
    console.log(err);
  }
}


module.exports = EmailHelper;
