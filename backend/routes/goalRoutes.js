const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {
    res.status(200).json({message: "get goals"})
})
router.post('/', (req, res) => {
    res.status(200).json({message: 'set goal'})
})


router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})


router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = router