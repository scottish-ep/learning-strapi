module.exports = ({ env }) => ({
  // auth: {
  //   secret: env('ADMIN_JWT_SECRET', '5c1a68e82cbbacb1a504f8367b74af9e'),
  // },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
