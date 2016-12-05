DROP DATABASE IF EXISTS api;
CREATE DATABASE api;

\c api;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR
);
  
INSERT INTO users ( name, email )
VALUES ('Mike', 'mprather@example.com');