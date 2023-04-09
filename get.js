import {DoorDashClient} from '@doordash/sdk';
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.developer_id,
  key_id: process.env.key_id,
  signing_secret: process.env.signing_secret,
});

const response = client
  .getDelivery('66c8e8d2-b83a-4a1b-8bcd-6e7b57ff5a2e')
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.log(err)
  });

  console.log(response);