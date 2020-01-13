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
    likes: [{
        type: Schema.Types.ObjectId, // Likes é um vetor, e possui um relacionamento entre a tabela Dev e o ID do usuário
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
}, {
        timestamps: true, // Criará duas colunas (createdAt e updatedAt), em cada registro
    });

module.exports = model('Dev', DevSchema);