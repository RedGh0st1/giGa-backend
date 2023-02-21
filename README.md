# Portfolio-project---backend
Backend of PERN Portfolio project-  GigA( Ghost interactive gaming Archive) personal gaming archive


## Getting Started

Create a top-level folder that will contain both your back-end and front-end applications:

1. Create a directory 
1. `cd` into the directory.
1. Fork and clone this repo
2. CD into directory.

### Back-end setup

It would be best to open a new terminal tab dedicated to running and developing your back-end.

- `cd back-end`
- `touch .env`

**.env**

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=giga_dev
```

- `npm install` - install npm packages listed in `package.json`.
- `npm run db:init` - initialize a new database and create tables.
- `npm run db:seed` - seed the table(s) with some data.
- `nodemon` - confirm that this is running on port 3333.
- Visit http://localhost:3333/games/ and make sure you see some data in the form of an array of objects.
- `npm run test` - to run the back-end tests.
