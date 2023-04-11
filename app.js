import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import 'dotenv/config';
import {v4 as uuidv4} from 'uuid';
import { DoorDashClient } from '@doordash/sdk';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(PORT, (err) => {
  if(err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port: ${PORT}`)
} );

//Get a delivery rate in the simulation
app.post("/get-delivery-rate", async (req, res) => {

  //my keys to doordash api
  const client = new DoorDashClient({
    developer_id: process.env.developer_id,
    key_id: process.env.key_id,
    signing_secret: process.env.signing_secret,
  });

  //hard coded values from the U.I. to doordash api
  const response = await client.deliveryQuote({
    external_delivery_id: uuidv4(),
    pickup_address: '1227 Folsom street, San Francisco, CA, 94103',
    pickup_phone_number: '+1(650)7728226',
    dropoff_address: "Golden Gate park, San Francisco, CA, 94117",
    dropoff_phone_number: "+1(650)5555555",
  });

  res.send(response);
  console.log("Quote", response);
});


//crashing if only creating on postman
// // accepting
// app.post("/create-delivery", async (req, res)=>{
//     //my keys to doordash api
//     const client = new DoorDashClient({
//       developer_id: process.env.developer_id,
//       key_id: process.env.key_id,
//       signing_secret: process.env.signing_secret,
//     });

//     //read the values from the delivery id
//     //session storage will be here
//     const response = await client.deliveryQuoteAccept(
//       "0cfdb0e6-a018-4654-ad25-598e272ae71d",
//     );

//     res.send(response);
//     //just to see the differnece in terminal
//     console.log("accept", response );
// });