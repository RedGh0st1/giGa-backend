// DEPENDENCIES
const app = require("./app")

// CONFIGURATION
require("dotenv").config()

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
