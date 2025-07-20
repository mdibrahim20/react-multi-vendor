const {Schema, model} = require('mongoose');

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        requyred: true
    },
    role: {
        type: String,
        default: 'admin'
    }
})

module.exports = model('admins', adminSchema);