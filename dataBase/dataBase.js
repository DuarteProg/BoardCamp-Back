import pg from "pg";
import dontev from "dotenv";

dontev.config();

const {Pool} = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
  });


  export default connection;