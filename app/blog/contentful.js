import { createClient } from 'contentful';

const client = createClient({
  space: 'tyisb6127qoe',//process.env.CONTENTFUL_SPACE_ID,
  accessToken: 'WryID0BRLPD2D45UtsVPHUCwzL3UuOHz4GiBzNynkHY'//process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;