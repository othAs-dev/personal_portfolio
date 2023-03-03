import nodemailer from "nodemailer"; // utiliser import au lieu de require
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export default async function handler(req, res) {
  const { firstname, lastname, email, message } = req.body;
  const timestamp = Timestamp.fromDate(new Date());
  const data = {
    firstname,
    lastname,
    email,
    message,
    sendedAt: timestamp,
  };
  const dbInstance = collection(db, "contacts");

  try {
    await addDoc(dbInstance, data);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "othmane.developer@gmail.com",
        pass: process.env.MAIL_KEY,
      },
    });

    const mailData = {
      from: "othmane.developer@gmail.com",
      to: data.email,
      subject: `Merci pour votre message ${data.firstname} ${data.lastname}`,
      html: `
            <style>
              body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
              }
              h1 {
                font-size: 24px;
                margin-top: 40px;
                margin-bottom: 20px;
                text-align: center;
              }
              p {
                margin-top: 20px;
                margin-bottom: 20px;
                line-height: 1.5;
              }
              ul {
                margin-top: 20px;
                margin-bottom: 20px;
                padding-left: 20px;
                list-style-type: square;
              }
            </style>
          </head>
          <body>
            <h1>Merci pour votre message, ${data.firstname} ${data.lastname} !</h1>
            <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
            <p>Voici un récapitulatif de votre message :</p>
            <ul>
              <li><strong>Nom :</strong> ${data.firstname} ${data.lastname}</li>
              <li><strong>Email :</strong> ${data.email}</li>
              <li><strong>Message :</strong> ${data.message}</li>
            </ul>
            <p>Encore merci pour votre message !</p>
          </body>
      `,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error writing to database:", error);

    res.status(500).json({ error: "Failed to submit form. Please try again." });
  }
}
