const mongoose = require('mongoose');
const bookingSchema = new  mongoose.Schema({
    name:   {
        type: String,
        required:true
    },
    status:{
        type: String,
        required:true,
        default:"requested"
    },
    vehicleid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'vehicle',
		required: true
	},
    userid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},
    packageid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'packages',
		required: true
	},

});

module.exports = mongoose.model('bookings', bookingSchema);