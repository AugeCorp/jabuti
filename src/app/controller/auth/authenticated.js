const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

const authConfig = require('../../config/auth')

const User = require('../models/User')

const router = require('../../../config/routes.config')

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

router.post('/register', async (req, res) => {
    const { email } = req.body

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: "User  Alredy exists" })

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({ user, 
            token: generateToken({ user: user.id })
        })
    } catch (err) {
        return res.status(400).send({ error: "Registration failed" })
    }
})