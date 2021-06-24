const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
    email: String,
    wallet_addres: String,
    status: String,
    date: { type: Date, default: Date.now },
    quantity: {type: Number, default: 1}
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);