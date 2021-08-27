const Express = require('express');
const router = Express.Router();
const { UserModel } = require('../models')

router.get('/log', (req, res) => {
    res.send('this is a log router')
});

router.get('/log/:id', (req, res) => {
    res.send('this is a log/:id router')
});




router.post('/register', (req, res) => {

    const { username, email, password } = req.body.user;
    UserModel.create({
        username,
        email,
       password
    })
        .then(user => res.status(201).json({ message: 'new user created', user }))
        .catch(err => res.status(500).json({ message: 'something went wrong at /register', err }))
})
    

router.post('/login', (req, res) => {

    let { email, password } = req.body

    user.findOne({ where: { email } })

        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, matches) => {

                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.jwt_SECRET, { expiresIN: '1d' })

                        res.status(200).json({
                            message: 'login successful',
                            sessionToken: token


                        })
                    } else {
                        res.status(502).json({ error: 'bad gateway' })
                    }
                })
            } else {
                res.status(500).json({ message: 'failed to authenticate' })
            }
        })

        .then(user => res.status(200).json(user))
});

module.exports = router