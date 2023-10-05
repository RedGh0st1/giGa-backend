const express = require("express")
const users = express.Router({ mergeParams: true })

const {
  getAllUsers,
  getUserById,
  newUser,
  loginUser,
  deleteUser,
  updateNewGameToUser,
  getAllUsersGames,
} = require("../queries/users.js")
const { createJWT } = require("../middleware/auth.js")

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers()
  if (allUsers[0]) {
    return res.json(allUsers)
  }
  return res.status(404).send("No users found")
})

users.get("/:id", async (req, res) => {
  const { username } = req.params
  const user = await getUserById(username)
  if (user) {
    return res.json({ id: user.id, username: user.username })
  }
  return res.status(404).send("User not found")
})
