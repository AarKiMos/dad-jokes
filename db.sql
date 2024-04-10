CREATE DATABASE jokes_db;

CREATE TABLE jokes (
    source_id VARCHAR(64) PRIMARY KEY,
    saved_on TIMESTAMP DEFAULT NOW()
);