import mailgunLoader from "mailgun-js";

let mailgun = mailgunLoader({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default function handler(req, res) {
  const { name, email, text } = req.body;

  const data = {
    from: email,
    to: "ensaagadirade@gmail.com",
    subject: `Message from ${name}`,
    text: text,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      res.status(500).send({ error: "Error sending email." });
    } else {
      res.status(200).send({ message: "Email sent successfully." });
    }
  });
}
