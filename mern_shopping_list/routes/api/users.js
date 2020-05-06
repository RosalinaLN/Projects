const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//get the User schema model
const User = require('../../models/User');

const jwtSecret = config.get('jwtSecret');

//@route  POST api/users
//@desc   Register new user
//@access Public
router.post('/', (req, res) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    //check for existing user 
    User.findOne({ email })
    .then(user => {
        if (user) { return res.status(400).json({ msg: 'User already exists' }) }

        const newUser = new User({
            name,
            email,
            password
        })

        //create salt and hash for the password
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user => {
                    //create a token for the id
                    jwt.sign({ id: user.id }, jwtSecret, { expiresIn: 3600 }, function(err, token) {
                        if (err) { throw err }
                        res.json({
                            token,
                            user: {
                                name: user.name,
                                password: user.password,
                                id: user.id
                            }
                        })
                      });
                    
                })
            });
        });
    })
})

module.exports = router;