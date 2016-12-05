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

CREATE TABLE tasks (
  ID SERIAL PRIMARY KEY,
    item_number VARCHAR,
    location_number VARCHAR,
    project VARCHAR,
    description VARCHAR,
    priority VARCHAR,
    requestor VARCHAR,
    assigned_to VARCHAR,
    due_date VARCHAR,
    notes VARCHAR
);

INSERT INTO tasks ( item_number, location_number, project, description, priority, requestor, assigned_to, due_date, notes )
VALUES ('1', '111', 'project', 'description', 'high', 'mike', 'mike', '10-10-2017', 'notes');