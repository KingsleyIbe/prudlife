const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = bcrypt.genSaltSync(10);

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_url);


// User Registration
app.post('/register', (req, res) => {
  const {username, password} = req.body;
  try {
    const userDoc = User.create(
      {
        username,
        password: bcrypt.hashSync(password, salt),
      }
      );
    res.json(userDoc);

    // console.log(userDoc);
  } catch(e) {
    res.status(400).json(e);
    console.log(e);

  }
});


// User Login Endpoint
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try {
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
  if (passOk === true) {

    // User Logged in

    jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
      if (err) {
        // console.log(err);
        throw err 
      } else {
        // console.log(token);
        res.cookie('token', token).json({
          id: userDoc._id,
          username,
        });
      }

    })
  } else {
    // Login error
    res.status(400).json('Wrong credentials');
  }
} catch (e) {
  console.log(e)
}
  // console.log(passOk);
});

app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  })
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
})

app.listen(4000);
