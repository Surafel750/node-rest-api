const router = require('express').Router()
const auth = require('../middleware/auth')
const { getAll, getOne, update, remove } = require('../controllers/userController')

router.use(auth)
router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
