import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('variable', {'title': "Variables"});
});

export default router;