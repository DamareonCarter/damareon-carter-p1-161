import express from 'express';
import path from 'path';

import faviconRouter from './routes/favicon.js';
import indexRouter from './routes/index.js';
import variableRouter from './routes/variable.js';
import conditionalRouter from './routes/conditional.js';
import loopRouter from './routes/loop.js';
import functionRouter from './routes/function.js';

let app = express();

app.set('views', path.join(import.meta.dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(import.meta.dirname, './public')));
app.use('/favicon.ico', faviconRouter);

app.use('/', indexRouter);
app.use('/variable', variableRouter);
app.use('/conditional', conditionalRouter);
app.use('/loop', loopRouter);
app.use('/function', functionRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));