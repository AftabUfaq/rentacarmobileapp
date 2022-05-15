const mongoose = require('mongoose');
const packageSchema = new  mongoose.Schema({
    name:   {
        type: String,
        required:true
    },
    duration: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    vehicleid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'vehicle',
		required: true
	},
});

module.exports = mongoose.model('packages', packageSchema);