import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('loop', {'title': "Loops"});
});

export default router;