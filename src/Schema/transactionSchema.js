const mongoose = require('mongoose');
const transactionsSchema = new  mongoose.Schema({
    status: {
        type: String,
        required:true
    },
    transactionsid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'bookings',
		required: true
	},
});

module.exports = mongoose.model('transactions', transactionsSchema);

