const express = require("express")
const router = express.Router()

const {
  getAllGames,
  getGames,
  createGames,
  deleteGames,
  updateGames,
} = require("../queries/games")

// INDEX
router.get("/", async (req, res) => {
  const allGame = await getAllGames()
  console.log("Hi")
  allGame[0]
    ? res.status(200).json(allGame)
    : res.status(500).json({ error: allGame.message })
})

// SHOW

router.get("/:id", async (req, res) => {
  const { id } = req.params
  const oneGame = await getGames(id)
  console.log("yo")
  !oneGame.message
    ? res.status(200).json(oneGame)
    : res.status(404).json({ error: "Not Found!!!" })
})

// CREATE

router.post("/", async (req, res) => {
  try {
    const createdGame = await createGames(req.body)
    res.status(200).json(createdGame)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedGame = await deleteGames(id)
    res.status(200).json(deletedGame)
  } catch (error) {
    res.status(404).json({ error: "ID Not Found!!" })
  }
})

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateGame = await updateGames(id, req.body)
    res.status(200).json(updateGame)
  } catch (error) {
    res.status(404).json({ error: "Game not available/Found!!!" })
  }
})
module.exports = router
