const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const {username, password} = req.body;
  res.json({requestData: {username, password}});
  // res.json('test Ok');
  // console.log(app.listen(4000));
});

app.listen(4000);
