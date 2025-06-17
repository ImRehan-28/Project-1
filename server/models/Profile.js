const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
		default:undefined,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
