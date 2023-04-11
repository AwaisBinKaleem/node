// get the client
const mysql = require("mysql2");

// create the connection to database
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "college",
});
