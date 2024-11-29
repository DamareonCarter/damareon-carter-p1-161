import express from 'express';
import path from 'path';

import indexRouter from './routes/index.js';

let app = express();

app.set('views', path.join(import.meta.dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(import.meta.dirname, './public')));

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));