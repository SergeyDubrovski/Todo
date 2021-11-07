import Router, { json } from 'express';
import Week from '../models/Week.js';


const weekRouter = new Router();

weekRouter.post('/day', async (req, res) => {

    try {
        const week = new Week(req.body);
        await week.save();
        res.status(200).json(req.body);
    } catch (error) {
        console.log(error);
        res.send({ message: 'Server error' });
    }
})
weekRouter.put('/day', async (req, res) => {

    try {

        const week = await Week.findOneAndUpdate({}, { task: [...req.body.task] });
        res.status(200).json(week);
    } catch (error) {
        console.log(error);
        res.send({ message: 'Server error' });
    }
})

weekRouter.get('/day', async (req, res) => {

    try {

        const week = await Week.find();
        res.status(200).json(week);
    } catch (error) {
        console.log(error);
        res.send({ message: 'Server error' });
    }
})

weekRouter.delete('/day', async (req, res) => {

    try {

        await Week.deleteMany();

        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.send({ message: 'Server error' });
    }
})


export default weekRouter;