import {DoorDashClient} from '@doordash/sdk';
import "dotenv/config";

const client = new DoorDashClient({
  developer_id: process.env.developer_id,
  key_id: process.env.key_id,
  signing_secret: process.env.signing_secret,
});

const response = client
  .getDelivery('D-12345')
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.log(err)
  });

  console.log(response);