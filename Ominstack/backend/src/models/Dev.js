const { Schema, model } = require('mongoose'); // Desestruturação

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
}, {
        timestamps: true, // Criará duas colunas (createdAt e updatedAt), em cada registro
    });

module.exports = model('Dev', DevSchema);