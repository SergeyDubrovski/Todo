import Router, { json } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator'
import User from '../modules/User.js';
import config from 'config';

const authRouter = new Router();
authRouter.get('/', async (req, res) => {
    const user = await User.find();
    res.status(200).json(user)
});
authRouter.post('/registr',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password will be longer than 3 and shorter then 12').isLength({ min: 3, max: 12 })
    ],
    async (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Incorrect request', errors })
            }
            const { email, password } = req.body;
            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: `User with this email ${email} alredy exist` })
            }
            const hashPassword = await bcrypt.hash(password, 8);
            const user = new User({ email, password: hashPassword });
            await user.save();
            return res.status(200).json({ message: 'User was created' })

        } catch (error) {
            console.log(error);
            res.send({ message: 'Server error' });
        }
    })
authRouter.post('/auth', async (req, res) => {

    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: `User not found` })
        }
        const isPassValid = await bcrypt.compareSync(password, user.password);

        if (!isPassValid) {
            return res.status(400).json({ message: `Password is incorrect` })
        }
        const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '1h' });
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
            }
        })

    } catch (error) {
        console.log(error);
        res.send({ message: 'Server error' });
    }
})

export default authRouter;
