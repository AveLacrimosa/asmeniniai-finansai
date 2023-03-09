const asyncHandler = require('express-async-handler');

const Finance = require('../models/financeModel');

// @desc Get events with logged in user id
// @route GET /api/events
// @access PRIVATE

const getAllFinances = asyncHandler(async (req, res) => {
    const finance = await Finance.find({ user: req.user.id })
    res.status(200).json(finance)
})

// // @desc As a Guest user check all events which are approved by an admin
// // @route GET /api/events/anon
// // @access Public

// const getEventsAnon = asyncHandler(async (req, res) => {
//     const events = await Finance.find({ approved: true })

//     if (events == "") {
//         res.status(400)
//         throw new Error("There are no events")
//     }

//     res.status(200).json(events)
// })

// @desc Set finance
// @route POST /api/finance
// @access PRIVATE
const setFinance = asyncHandler(async (req, res) => {
    if (!req.body.salary || !req.body.category || !req.body.spending) {
        res.status(400)
        throw new Error('fill all the fields!')
    }
    const finance = await Finance.create({
        salary: req.body.salary,
        category: req.body.category,
        spending: req.body.spending,
        user: req.user.id
    })
    res.status(200).json(finance)
})

// @desc Update finances
// @route PUT /api/finance/:id
// @access PRIVATE

const updateFinance = asyncHandler(async (req, res) => {
    const finance = await Finance.findById(req.params.id)

    if (!finance) {
        res.status(400)
        throw new Error('Finances not found')
    }

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches the goal user
    if (finance.user.toString() !== req.user.id && req.user.role !== "admin") {
        res.status(401);
        throw new Error("Not authorized");
    }
    // checks if user tries to change approval
    if (req.body.approved && req.user.role !== "admin") {
        res.status(401);
        throw new Error("You can't change the approval");
    }

    // if admin or event creator can edit
    if (req.user.role === "admin" || finance.user.toString() === req.user.id) {
        const updateFinance = await Finance.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(updateFinance)
    }
})

// @desc Delete finances
// @route DELETE /api/finance/:id
// @access PRIVATE

const deleteFinance = asyncHandler(async (req, res) => {
    const finance = await Finance.findById(req.params.id)

    if (!finance) {
        res.status(400)
        throw new Error('Finances not found')
    }

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the goal user
    if (finance.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await finance.deleteOne();

    res.status(200).json({ id: req.params.id })
})

// @desc admin approves the event
// @route GET /api/finance/approve/:id
// @access PRIVATE


module.exports = {
    getAllFinances,
    setFinance,
    updateFinance,
    deleteFinance
}
