const {parse} = require("pg-connection-string");
module.exports = ({ env }) => {
    const {host,port,database,user,password} = parse(env('DATABASEUrl')); 
    return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      debug: false,
    },
  };};