const { model, Schema } = require('mongoose');


// lookup mongoose schema properties
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    token: String,
});

module.exports = model('User', userSchema);
