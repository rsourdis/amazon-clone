const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HSTJ3HGJQvwLfaeO4RiUeH13VEj0F74WdBIzEpg9YX0dPwOv8289CTqyzpJR3ZovBJlsVjH8n9EdSiOU2MSrNj600Y1zWxwGh');

// API 

// App config

const app = express();

// middlewares

app.use(cors({origin: true}));
app.use(express.json());

// API Routes

app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment Request Recieved for this amount:', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});

// listen command
exports.api = functions.https.onRequest(app);
