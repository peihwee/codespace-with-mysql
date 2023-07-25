//////////////////////////////////////////////////////
// REQUIRE MODULES
//////////////////////////////////////////////////////
const pool = require("../services/db");

//////////////////////////////////////////////////////
// DEFINE SQL STATEMENTS
//////////////////////////////////////////////////////
const SQLSTATEMENT = `
DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  message TEXT NOT NULL
);

INSERT INTO Messages (message) VALUES
  ('Hello world!'),
  ('This is a test message'),
  ('This is another test message'),
  ('This is a test message from the server')
`;

//////////////////////////////////////////////////////
// RUN SQL STATEMENTS
//////////////////////////////////////////////////////
pool.query(SQLSTATEMENT, (error, results, fields) => {
  if (error) {
    console.error("Error creating tables:", error);
  } else {
    console.log("Tables created successfully");
  }
  process.exit();
});
