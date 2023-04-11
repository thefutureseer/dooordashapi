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