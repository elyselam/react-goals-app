// @desc Get Goals
// @route GET /api/goals
// @access Private


const getGoals = (req, res) => {
    res.status(200).json({message: 'get goals'})
}

// @desc POST Goals
// @route post /api/goals
// @access Private

const setGoal = (req, res) => {
    res.status(200).json({message: 'set goal'})}
// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}


// @desc Delete Goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}



module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal }