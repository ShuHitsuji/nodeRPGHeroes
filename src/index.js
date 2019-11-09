require('dotenv').config()
const express = require("express");
const app = express();

app.use(express.json());

require('./routes/heroes.routes.js')(app);
require('./routes/monsters.routes.js')(app);

const port = 3000;
app.listen(port, () => console.log("it's alive!!!"));