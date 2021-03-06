const User = require('../models/User')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authConfig = require('../secure/secrets.json')
const { hostMail, sendEmail } = require('../secure/node-mailer/mailer.json')
const mailer = require('nodemailer')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

module.exports = {
    async index(req,res) {
        try {
            const {email} = req.body;

            if(!email)
                return res.status(400).send({error: 'email not passed'})

            response = await User.findOne({email: email})

            if(!response)
                return res.status(404).send({error: 'email not exists'})


            res.status(200).send(response)
        } catch (err) {
            res.status(400).json({error : `User not Found`})
        }
    },

    async register(req, res) {
        const { email } = req.body;

        try {

            if(!email)
                return res.status(404).send({ Error: 'Email not declared!' })

            if(await User.findOne({ email }))
                return res.status(400).send({ Error: "User alredy exists!" })

            const user = new User(req.body)

            const pwd = await bcrypt.hash(user.password, 10)

            user.password = pwd

            await user.save();

            user.password = undefined

            return (
                res.status(200).send({user,
                    token: generateToken({ user: user._id })
                })
            )

        } catch (err) {
            res.status(400).send({ error: "Registration Failed!" })
        }
    },

    async auth(req, res) {
        const { email, password } = req.body

        try {

            if(!email)
                return res.status(400).send({ error : "User not declared"})

            if(!password)
                return res.status(400).send({ error: "Password not declared"})

            const user = await User.findOne({ email }).select('+password')

            if(!user)
                return res.status(404).send({ Error: 'User not found!'})

            if(! await bcrypt.compare(password, user.password))
                return res.status(400).send({ error: 'Password has incorect'})

            user.password = undefined
            
            res.status(200).send({user, token: generateToken({id: user._id})})

        } catch {
            res.status(400).send({ error: "Authenticate Failed!" })
        }
    },

    async recuperacao(req, res) {

        const { email } = req.body

        try{
            console.log(email)
            if(!email)
                return res.status(404).send({ error: "Email not declared" })

            const remetente = mailer.createTransport(hostMail);

            sendEmail.to = email

            remetente.sendMail(sendEmail, (error) => {
                if(error)
                    res.status(400).send({ error: error })

                res.status(200).send( "Email enviado com sucesso.")
            })

        } catch (err) {
            return res.status(400).send({ error: "Error" })
        }
    },

    async delete() {
        
    }
}