const express = require("express");
const app = express();

const HeroController = require('./controllers/heroController');

app.use(express.json());

app.post('/api/hero', HeroController.create);
app.get('/api/hero/:id',HeroController.get);

const port = 3000;
app.listen(port, () => console.log("it's alive!!!"));