import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, './public/images/js_logo.png'));
});

export default router;