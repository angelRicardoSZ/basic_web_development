/* Required package  */
const express = require("express");
const path = require('path');

const app = express();

/* Routes*/
const indexRouter = require('./routes/index.js');


/*Configure file to work with ejs*/
app.set('view engine', 'ejs');

/*Public files*/
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);

/*  Choose the available port */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});