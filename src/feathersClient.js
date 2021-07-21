import feathers from '@feathersjs/client';

const host = process.env.REACT_APP_SERVER_URL;
const client = feathers();

client.configure(feathers.rest(host).fetch(fetch));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

export default client;