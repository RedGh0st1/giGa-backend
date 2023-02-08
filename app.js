//  CONIFGURATION
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(expres.json())

// ROUTES
app.get("/", (req, res) => {
  res.send(`Welcome to GigA`)
})

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!")
})

// EXPORT
module.exports = app
