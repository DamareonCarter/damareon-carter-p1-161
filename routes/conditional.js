import express from 'express';

let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('conditional', {'title': "Conditional Statements"});
});

export default router;