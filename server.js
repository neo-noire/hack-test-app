import express from 'express'
import bodyParser from 'body-parser';
import {verifyWebhook} from './verify-webhook.js'

const app = express()
const port = 8080


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  // Add support for GET requests to our webhook
app.get("/webhook", verifyWebhook);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });