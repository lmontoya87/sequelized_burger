-- CREATE THE DATABASE burgers_db

CREATE DATABASE if not exists burgers_db;

USE burgers_db;

-- CREATE THE TABLE burgers

CREATE TABLE if not exists burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;