module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 33061),
      database: env('DATABASE_NAME', 'store'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Iwbr100%'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
