DROP DATABASE IF EXISTS giga_dev;
CREATE DATABASE giga_dev;
\c giga_dev;

DROP TABLE IF EXISTS giga_users;
CREATE TABLE IF NOT EXISTS giga_users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS games;
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  platform TEXT NOT NULL, 
  genre TEXT,
  number_of_players VARCHAR(255),
  esrd_rating TEXT NOT NULL,
  publisher TEXT,
  developer TEXT, 
  release_date INT,
  present BOOLEAN,
  digital BOOLEAN,
  image_url TEXT,
  description TEXT
);

DROP TABLE IF EXISTS systems;
CREATE TABLE systems (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES giga_users (id),
  username TEXT,
  system_name TEXT UNIQUE NOT NULL, 
  image_url TEXT [],
  manufacturer TEXT,
  consoles INTEGER,
  controllers INTEGER,
  release_date TEXT
);

DROP TABLE IF EXISTS ownerships;
CREATE TABLE ownerships (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES giga_users (id) ON DELETE CASCADE, 
  game_id INTEGER REFERENCES games (id),
  system_id INTEGER REFERENCES systems (id),
  purchase_date TEXT,
  price NUMERIC,
  rating REAL,
  owned BOOLEAN,
  CONSTRAINT unique_ownership UNIQUE (user_id, game_id, system_id)
);

DROP TABLE IF EXISTS wishlists;
CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES giga_users (id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games (id), 
  system_id INTEGER REFERENCES systems (id),
  purchased BOOLEAN DEFAULT FALSE,
  wished BOOLEAN DEFAULT FALSE,
  added_date TEXT
);

DROP TABLE IF EXISTS playtime;
CREATE TABLE playtime (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES giga_users (id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games (id) ON DELETE CASCADE,
  system_id INTEGER REFERENCES systems (id) ON DELETE CASCADE,
  hours INTEGER,
  minutes INTEGER,
  seconds INTEGER,
  started DATE,
  ended DATE,
  played BOOLEAN DEFAULT FALSE,
  paused BOOLEAN DEFAULT TRUE,
  stopped BOOLEAN DEFAULT TRUE,
  time_played TIMESTAMP WITH TIME ZONE,
  last_played TIMESTAMP WITH TIME ZONE,
  total_minutes INTEGER,
  total_hours INTEGER,
  total_seconds INTEGER
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES giga_users (id) ON DELETE CASCADE, 
  game_id INT REFERENCES games (id) ON DELETE CASCADE,
  title VARCHAR NOT NULL, 
  review_body TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP DEFAULT NOW(),
  is_deleted BOOL,
  author_name VARCHAR,
  avatar_url VARCHAR,
  cover_image VARCHAR,
  image_url TEXT,
  rating FLOAT,
  score INTEGER,
  votes INTEGER,
  comments INTEGER,
  tags JSONB
);

DROP TABLE IF EXISTS qr_codes;
CREATE TABLE qr_codes (
  id SERIAL PRIMARY KEY,
  code VARCHAR(255),
  game_id INTEGER REFERENCES games (id),
  system_id INTEGER REFERENCES systems (id),
  image_url TEXT [],
  type VARCHAR(100),
  status VARCHAR(30),
  expires TIMESTAMP,
  used_by VARCHAR,
  ip_address VARCHAR,
  date_created TIMESTAMP,
  CONSTRAINT unique_qr_code UNIQUE (code)
);

DROP TABLE IF EXISTS game_images;
   CREATE TABLE game_images (
     id SERIAL PRIMARY KEY,
        game_id INTEGER REFERENCES games (id) ON DELETE CASCADE,
        image_url TEXT []
);

DROP TABLE IF EXISTS game_videos;
   CREATE TABLE game_videos (
      id SERIAL PRIMARY KEY,
         game_id INTEGER REFERENCES games (id) ON DELETE CASCADE,
         video_url TEXT []
);

DROP TABLE IF EXISTS game_sessions;
   CREATE TABLE game_sessions (
    id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES giga_users (id) ON DELETE CASCADE,
      game_id INTEGER REFERENCES games (id) ON DELETE CASCADE,
      started_at TIMESTAMP WITH TIME ZONE,
      ended_at TIMESTAMP WITH TIME ZONE,
      window_url TEXT
);
