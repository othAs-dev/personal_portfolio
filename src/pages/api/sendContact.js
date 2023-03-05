import nodemailer from "nodemailer"; // utiliser import au lieu de require
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../../../firebase/firebaseConfig";
const dbInstance = collection(db, "contacts");
const timestamp = Timestamp.fromDate(new Date());

export default async function handler(req, res) {
  const storage = getStorage();
  const fileRef = ref(
    storage,
    "gs://portfolio-othmane.appspot.com/black_logo.png"
  );
  const fileUrl = await getDownloadURL(fileRef);
  const { firstname, lastname, email, message } = req.body;
  const data = {
    firstname,
    lastname,
    email,
    message,
    sendedAt: timestamp,
  };

  try {
    await addDoc(dbInstance, data);

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      tls: {
        ciphers: "SSLv3",
      },
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_KEY,
      },
    });

    const mailData = {
      from: "othmane.developer@gmail",
      to: data.email,
      subject: `Merci pour votre message ${data.firstname} ${data.lastname} 🚀`,
      html: `
        <body style="border-style: solid;
                      border-width: thin;
                      border-color: #dadce0;
                      border-radius: 8px;
                      padding: 10px 20px;">
          <div style="
                      width: 100%;
                      text-align: center;
          ">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <a href="https://fr.linkedin.com/in/othmane-ait-salah-36736423a" style="text-align: center">
                    <img src=${fileUrl} alt="logo" style="width: 150px"/>
                  </a>
                </td>
              </tr>
            </table>
          </div>          
          <h3 style="text-align: center">Merci pour votre message ${data.firstname} ${data.lastname}!</h3>
          <p style="font-size: 16px;">J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
          <p style="text-decoration: underline; font-size: 16px;">Voici un récapitulatif de votre message :</p>
          <p style="font-size: 16px;padding-bottom: 15px"><strong>${data.message}</strong></p>
          <p style="text-align: center; font-size: 16px; font-weight: 500; border-top: thin solid #dadce0; padding-top: 15px">Cordialement, Othmane</p>

          <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center">
              <a href="https://fr.linkedin.com/in/othmane-ait-salah-36736423a?original_referer=https%3A%2F%2Fwww.google.com%2F" style="text-decoration: none">
                <img src="https://www.nicepng.com/png/detail/461-4616944_linkedin-logo-png-linked-in-icon-svg.png" alt="linkedin" style="width: 26px; height: 26px;" title="LinkedIn">
              </a>
              <a href="tel:+33755384212" style="margin-left: 15px; text-decoration: none">
                <img src="https://www.citypng.com/public/uploads/small/11641393938nn6j480o9ylr0bzap6d5rasvhwihvkx5p2hdbc8h05kcmiug7vsb531ovbniakvh2omjn5cby7kl0yrmf2epfrftbqziptjstwey.png" alt="phone" style="width: 30px; height: 30px;" title="0755384212">
              </a>
              <a href="https://github.com/othAs-dev" style="margin-left: 15px; text-decoration: none">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="phone" style="width: 30px; height: 30px;" title="GitHub">
              </a>
            </td>
          </tr>
        </table>
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
