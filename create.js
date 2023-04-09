import { DoorDashClient } from "@doordash/sdk";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.developer_id,
  key_id: process.env.key_id,
  signing_secret: process.env.signing_secret,
});

const response = await client.createDelivery({
  external_delivery_id: uuidv4(),
  pickup_address: '1227 Folsom street, San Francisco, CA, 94103',
  pickup_phone_number: '+1(650)7728226',
  dropoff_address: "Golden Gate park, San Francisco, CA, 94117",
  dropoff_phone_number: "+1(650)5555555",
});
console.log(response);

/////////////////////////////////

// const DoorDashClient = require("@doordash/sdk");
// const { v4: uuidv4 } = require("uuid");

// const client = new DoorDashClient.DoorDashClient({
//   developer_id: "{your developer_id}",
//   key_id: "{your key_id}",
//   signing_secret: "{your signing_secret}",
// });

// const response = client
//   .createDelivery({
//     external_delivery_id: uuidv4(),
//     pickup_address: '1227 Folsom street, San Francisco, CA, 94103',
//     pickup_phone_number: '+1(650)7728226',
//     dropoff_address: "Golden Gate park, San Francisco, CA, 94117",
//     dropoff_phone_number: "+1(650)5555555",
//   })
//   .then(() => {
//     // do something
//   })
//   .catch((err) => {
//     // handle error
//   });

// ////////////////////////////////////////
// const DoorDashClient = require('@doordash/sdk')

// const client = new DoorDashClient.DoorDashClient(process.env.key_id)

// const response = client
//   .createDelivery({
//     external_delivery_id: 'D-12345',
//     pickup_address: '1227 Folsom street, San Francisco, CA, 94103',
//     pickup_phone_number: '+1(650)7728226',
//     dropoff_address: '1201 3rd Ave, Seattle, WA, 98101',
//     dropoff_phone_number: '+1(650)5555555',
//   })
//   .then(response => {
//     console.log(response.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })