const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { router } = require('./Routes/router');
const app = express();

app.use(cors());
app.use('/details', router);


app.listen(3000,()=>{
    console.log("listening at 3000");
})