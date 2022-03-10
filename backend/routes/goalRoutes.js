const express = require('express')
const router = express.Router()


const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalControllers')

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoals)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`})
// })


router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router