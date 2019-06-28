const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors');
const config = require('config');
// const User = require ('./models/Users');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const db = config.get('mongoURI')
console.log(db)
mongoose.connect(db,{useNewUrlParser:true})
  .then(()=>console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Use Routes
app.use('/users', require('./routes/users'));
app.use('/workouts', require('./routes/workouts'));
app.use('/scores',require('./routes/scores'));
app.use('/auth', require('./routes/auth'));

// Catch 404 Errors and forward them to error handler
app.use ((req,res,next) => {
  const err = new Error('Not Found');
  err.status = 404
  next(err)
})

// Error handler function
app.use((err, req,res,next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;
  res.status(status).json({error: {message: error.message}})
  console.error(err)
})

//Listener Port 6969 - Because Justin is a Child
const port = app.get('port') || 6969
app.listen(port,() => {console.log(`I am listening at port ${port}`)})
