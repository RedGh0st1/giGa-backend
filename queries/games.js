const db = require(`../db/dbConfig`)

// INDEX
const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games")
    return allGames
  } catch (error) {
    return error
  }
}

// SHOW
const getGames = async (id) => {
  try {
    const getOneGame = await db.one("SELECT * FROM WHERE id=$1", id)
    return getOneGame
  } catch (error) {
    return error
  }
}

// CREATE
const createGames = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games() VALUES($1, $2, $3, $4, $5) RETURNING *",
      []
    )
    return newGame
  } catch (error) {
    return error
  }
}

// DELETE/DESTROY
const deleteGames = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM games WHERE id=$1 RETURNING *",
      id
    )
    return deletedGame
  } catch (error) {
    return error
  }
}

// UPDATE
const updateGames = async (id, game) => {
  try {
    const updatedGame = await db.one(
      "UPDATE games SET name=$1, $2, $3, $4, $5, WHERE id=$6 RETURNING *",
      []
    )
    return updatedGame
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllGames,
  getGames,
  createGames,
  deleteGames,
  updateGames,
}
