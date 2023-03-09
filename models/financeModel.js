const mongoose = require('mongoose');

const financeSchema = mongoose.Schema(
    {
        salary: {
            type: String,
            required: [true, 'Please add your salary']
        },
        category: {
            type: String,
            required: [true, 'Please add a category']
        },
        spending: {
            type: String, 
            required: [true, 'Please add funds spent']
        },
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        approved: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
   }
)

module.exports = mongoose.model('Finance', financeSchema)