const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// connect mongo
mongoose.connect('mongodb://mongo:27017/testdb');

const Cat = mongoose.model('Cat', { name: String });

// create
app.post('/cats', async (req, res) => {
  const cat = new Cat(req.body);
  await cat.save();
  res.json(cat);
});

// read
app.get('/cats', async (req, res) => {
  const cats = await Cat.find();
  res.json(cats);
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});