import axios from 'axios';
import jwt from 'jsonwebtoken';
import "dotenv/config";

const accessKey = {
  developer_id: process.env.developer_id,
  key_id: process.env.key_id,
  signing_secret: process.env.signing_secret,
};

const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 60),
  iat: Math.floor(Date.now() / 1000),
};

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } };

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
);

console.log(token);



const body = JSON.stringify({
  external_delivery_id: 'D-12345',
  pickup_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  pickup_business_name: 'Wells Fargo SF Downtown',
  pickup_phone_number: '+16505555555',
  pickup_instructions: 'Enter gate code 1234 on the callbox.',
  dropoff_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  dropoff_business_name: 'Wells Fargo SF Downtown',
  dropoff_phone_number: '+16505555555',
  dropoff_instructions: 'Enter gate code 1234 on the callbox.',
  order_value: 1999,
})

axios
  .post('https://openapi.doordash.com/drive/v2/deliveries', body, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
  .then(function (response) {
    // console.log(response.data)
    Object.entries(response).forEach(keyValuePair => {console.log("  ",...keyValuePair)})
  })
  .catch(function (error) {
    console.log(error)
  })