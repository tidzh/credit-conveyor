const express = require('express');
const path = require('path');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || '3000'

app.set('port', port);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})


