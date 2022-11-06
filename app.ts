import path from 'path';

import dotenv from 'dotenv';
import express, { Express } from 'express';

import clientRouter from './src/routes/client';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || '3000';

app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/client', clientRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
