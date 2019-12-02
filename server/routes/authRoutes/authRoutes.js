const express = require('express');
const router = express.Router();
const authHandlers = require('../../handlers/authHandlers/authHandlers')

router.post('/register', (req, res) => {

    console.log("the Client asked for : " + req.url)
    authHandlers.register(req, res)
})

router.post('/login', (req, res) => {

    console.log("the Client asked for : " + req.url)
    authHandlers.login(req, res)
})

module.exports = router;