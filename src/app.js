const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv').config();
const path = require('path');
const reload = require('reload');
const cors = require('cors');
const port = process.env.PORT
const app = express();
app.use(express.urlencoded({extended:false}))
app.use(cors())
require('./hbshelper');
app.set('view engine', 'hbs');
const viewpath = path.join(__dirname, "./templates/view")
const partialspath = path.join(__dirname, "./templates/Partials");
const staticpath = path.join(__dirname, "./static");
app.use(express.static(staticpath));
app.set("views",viewpath);
hbs.registerPartials(partialspath);
app.use(require("./routes/routes"))

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})
reload(app);