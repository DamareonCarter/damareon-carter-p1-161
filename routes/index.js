import express from 'express';
import path from 'path';

let router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(import.meta.dirname, "../public/index.html"));
});

export default router;