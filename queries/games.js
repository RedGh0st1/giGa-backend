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
    const getOneGame = await db.one("SELECT * FROM games  WHERE id=$1", id)
    return getOneGame
  } catch (error) {
    return error
  }
}

// CREATE
const createGames = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games(title, platform, genre, number_of_players, esrd_rating, publisher, developer, release_date, present, digital, image, description) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        game.title,
        game.platform,
        game.genre,
        game.number_of_players,
        game.esrd_rating,
        game.publisher,
        game.developer,
        game.release_date,
        game.present,
        game.digital,
        game.image,
        game.description,
      ]
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
      "UPDATE games SET title=$1, platform=$2, genre=$3, number_of_players=$4, esrd_rating=$5, publisher=$6, developer=$7, release_date=$8, present=$9, digital=$10, image=$11, description=$12, WHERE id=$13 RETURNING *",
      [
        game.title,
        game.platform,
        game.genre,
        game.number_of_players,
        game.esrd_rating,
        game.publisher,
        game.developer,
        game.release_date,
        game.present,
        game.digital,
        game.image,
        game.description,
        id,
      ]
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
