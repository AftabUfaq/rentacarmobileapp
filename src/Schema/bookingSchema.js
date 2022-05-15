const mongoose = require('mongoose');
const bookingSchema = new  mongoose.Schema({

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
    car_owner_id:{
        type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true
    },
    packageid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'packages',
		required: true
	},
    status:{
        type: String,
        required:true,
        default:"requested"
    },
    payment:{
        type: String,
        required:true,
        default:"paid"
    },
    date:{
        type: String,
        required:true,
        default:"paid"
    }

});

module.exports = mongoose.model('bookings', bookingSchema);