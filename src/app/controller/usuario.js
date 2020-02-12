const db = require('../../database/index')
const User = require('../models/Usuario')

module.exports = {
    async index(req,res) {
        try {
            res.status(200).send('ok')
        } catch (err) {
            res.status(400).json({error : `User not Found`});
        }
    },
    async store(req, res) {
        try {
            const user = req.body;

            res.status(200).send(`${user.name} -  ${user.email} - ${user.password}`)
        } catch (err) {
            res.status(400).json('error')
        }
    }
}