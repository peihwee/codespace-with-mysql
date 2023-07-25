//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pool = require("../services/db");

//////////////////////////////////////////////////////
// GET DATABASE NAME FROM POOL CONFIG
//////////////////////////////////////////////////////
const database = pool.config.connectionConfig.database;

//////////////////////////////////////////////////////
// SET DATABASE NAME TO NULL IN POOL CONFIG
// 
// This is necessary because the database must be created
//////////////////////////////////////////////////////
pool.config.connectionConfig.database = null; // set database to null to create the database

//////////////////////////////////////////////////////
// DEFINE SQL STATEMENTS
//////////////////////////////////////////////////////
const CHECK_DB_SQL = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${database}'`;
const CREATE_DB_SQL = `CREATE DATABASE IF NOT EXISTS ${database}`;

//////////////////////////////////////////////////////
// RUN SQL STATEMENTS
//
// Check if database exists
//////////////////////////////////////////////////////
pool.query(CHECK_DB_SQL, (error, results) => {
  if (error) {
    console.error('Error checking database:', error);
    connection.release();
    return;
  }
  console.log('results:', results);
  if (results.length === 0) {
    // If database does not exist, create it
    console.log(`Database "${database}" does not exists`);
    // Execute the SQL query to create the database
    pool.query(CREATE_DB_SQL, (error, results) => {
      if (error) {
        console.error("Error creating database:", error);
      } else {
        console.log(`Database "${database}" has been created successfully`);
      }
      process.exit();
    });
  }
  else {
    // Database already exists
    console.log(`Database "${database}" already exists`);
    process.exit();
  }
});