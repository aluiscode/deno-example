import { Database } from '../../../denodb-master/mod.ts';
import { config } from '../../../config/index.ts'

const db = new Database( 'mysql' , {
  host: config.dbHost,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});

export default db;