import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  const [results, fields] = await connection.query(
    'SELECT * FROM visitors'
  );
  console.log(results);
  console.log(fields);
} catch (err) {
  console.error(err);
}

// Using placeholders
try {
  const [results] = await connection.query(
    'SELECT * FROM visitors'
  );
} catch (err) {
  console.error(err);
}

export default connection;