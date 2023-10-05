const db = require("../db/dbConfig.js")
const bcrypt = require("bcrypt")
const saltRounds = 10

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM giga_users")
    return allUsers
  } catch (err) {
    return err
  }
}

const getUserById = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM giga_users WHERE id = $1", id)
    return oneUser
  } catch (err) {
    return err
  }
}

const newUser = async (user) => {
  const { name, password, username, email, image_url } = user
  try {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    const createNewUser = await db.one(
      "INSERT INTO giga_users (anme, username, email,  password,  image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, username, email, hashedPassword, image_url]
    )
    if (createNewUser) return createNewUser
  } catch (err) {
    return err
  }
}

const loginUser = async () => {
  try {
    const loginUser = await db.one(
      "SELECT * FROM giga_users WHERE username = $1",
      username
    )
    const validPassword = await bcrypt.compare(password, loginUser.password)
    if (!validPassword) {
      throw { status: 401, error: "Invalid username or password" }
    }
    return loginUser
  } catch (err) {
    return err
  }
}
const updateNewGameToUser = async () => {}
const deleteUser = async () => {
  try {
    const removeUser = await db.one("DELETE * FROM")
  } catch (error) {}
}
const getAllUsersGames = async () => {}

module.exports = {
  getAllUsers,
  getUserById,
  newUser,
  loginUser,
  updateNewGameToUser,
  deleteUser,
  getAllUsersGames,
}
