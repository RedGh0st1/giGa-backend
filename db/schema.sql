DROP DATABASE IF EXISTS giga_dev;
CREATE DATABASE giga_dev;

\c giga_dev;

-- DROP TABLE IF EXISTS games;


CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    platform TEXT NOT NULL, 
    genre TEXT,
    number_of_players VARCHAR(255),
    ESRD_rating TEXT NOT NULL,
    publisher TEXT,
    developer TEXT, 
    release_date INT,
    present BOOLEAN,
    digital BOOLEAN,
    image TEXT DEFAULT'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
    description TEXT);
    