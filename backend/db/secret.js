const mongoose = require('mongoose');
const url = "mongodb+srv://pranavinukala0302:5HamEfj1hrbPNMl7@cluster0.q6ypajk.mongodb.net/business_card"
mongoose.connect(url).then(function(db){
    console.log('DB connected');
}).catch(function(err){
    console.log('DB connection error:',err);
});

module.exports = mongoose;