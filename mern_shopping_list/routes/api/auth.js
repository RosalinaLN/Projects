const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');  //this is the auth from middleware

//get the User schema model
const User = require('../../models/User');

const jwtSecret = config.get('jwtSecret');

//@route  POST api/auth
//@desc   Check when user log in
//@access Public
router.post('/', (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    //check for existing user 
    User.findOne({ email })
    .then(user => {
        if (!user) { return res.status(400).json({ msg: 'User does not exists' }) }

        //validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (!isMatch) { return res.status(400).json({ msg: 'Invalid credentials' }) }

            jwt.sign({ id: user.id }, jwtSecret, { expiresIn: 3600 }, function(err, token) {
                if (err) { throw err }
                res.json({
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        id: user.id
                    }
                })
            });
            
        })
        
    })
})

//@route  GET api/auth/user
//@desc   Get user data
//@access Private 
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')    //we don't want to return the password
    .then(user => res.json(user));
})

module.exports = router;