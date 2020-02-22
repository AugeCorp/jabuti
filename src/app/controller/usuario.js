const db = require('../../database/index')
const User = require('../models/Usuario')

module.exports = {
    async index(req,res) {
        try {
            const {email} = req.body;

            if(!email)
                return res.status(404).send({error: 'email not passed'})

            response = await User.find({email: email})

            if(!response)
                return res.status(404).send({error: 'email not exists'})


            res.status(200).send(response)
        } catch (err) {
            res.status(400).json({error : `User not Found`});
        }
    },
    async store(req, res) {
        try {

            response = await User.create(req.body)
            
            return res.status(200).send(response)





            // res.status(200).send(`${user.name} -  ${user.email} - ${user.password}`)
        } catch (err) {
            res.status(400).json('error')
        }
    },

    async update() {

    },

    async delete() {
        
    }
}