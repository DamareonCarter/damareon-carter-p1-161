import express from 'express';
import indexRouter from './routes/index.js';
let app = express();

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));