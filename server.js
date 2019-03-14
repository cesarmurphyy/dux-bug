const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mailer = require('./mailer');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.use(bodyParser.json());

  server.post('/api/form', (req, res) => {
    const { email = '', name = '', option = '', message = '' } = req.body;
    mailer({ email, name, option, text: message })
      .then(() => {
        console.log('success');
        res.send('success');
      })
      .catch(error => {
        console.log('failed', error);
        res.send('badddd');
      });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});
