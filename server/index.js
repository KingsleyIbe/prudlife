const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_url);

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

    console.log(userDoc);
  } catch(e) {
    res.status(400).json(e);
    console.log(e);

  }
  // res.json('test Ok');
});

app.listen(4000);

//mongodb+srv://prudlifeblog:prudlifeblog1234@cluster0.wlhsjyv.mongodb.net/
