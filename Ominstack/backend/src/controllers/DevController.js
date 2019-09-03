const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        };

        // O axios.get é assíncrono, await aguardará a resposta
        // Para que o await funcione, a função deverá ser declarada como assícrona
        const response = await axios.get(`https://api.github.com/users/${username}`);

        // avatar_url renomeado para avatar
        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};