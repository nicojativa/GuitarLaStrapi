module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuu05la4993aigbbqf0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_atrl'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '2rzrJU1jhSF45BxZ9xgEkZizXmxsDydA'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
