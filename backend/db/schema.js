const mongoose = require('../db/secret');

const detailSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    description:{
        type: String
    },
    interests:[{type: String}],
    linkedIn :{
        type: String
    },
    github:{
        type: String
    }
});
const detailModel = mongoose.model('businessModel', detailSchema);
module.exports = {detailModel};