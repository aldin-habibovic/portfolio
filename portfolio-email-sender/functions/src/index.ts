import * as functions from "firebase-functions";

import { createTransport } from "nodemailer";


const mailTransport = createTransport({
  service: 'gmail',
  auth: {}
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  const mailOptions = {
    from: "test@gmail.com",
    replyTo: "test@gmail.com",
    to: "",
    subject: "test email",
    text: "text text"
  }

  mailTransport.sendMail(mailOptions).then(() => {
    console.log('New email sent to: ' );
    response.status(200).send({isEmailSend: true});
  });

  response.send("Hello from Firebase!");
});
