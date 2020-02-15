const { Router } = require('express')
const { getMessages } = require('../services/blocklistService')

const router = Router()

router.get('/', async (req, res) => {
  res.json(getMessages())
})

module.exports = router
