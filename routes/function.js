import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('function', {'title': "Functions"});
});

export default router;