const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'accounts@dux.io',
    refreshToken: '1/OJirwD8-WzdsKCzGYa_Ax_6j2QxPj4NNigF7-tlydx0',
    accessToken:
      'ya29.Glu4Bk8GKgmn_O8WZvJhvlIEtc1vnhQe9DxG6k4VouFWdHo0p1LjVZpFLD5GKlWBEW_ORTR_iKqCnF3VTqEkoxZSdTbUZAVg5r6bH5RkZ24wU11iOJoAWrNmZeu6',
    clientId:
      '586251288936-babe13at6dqee6oflfqk15lrrqs1teig.apps.googleusercontent.com',
    clientSecret: 'yOJ9TIPtbvl-DlPM-RW-00sl'
  }
});

const send = ({ email, name, option, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: 'accounts@dux.io',
    subject: `New message from ${from}`,
    text: `Subject: ${option}. Message: ${text}`,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
