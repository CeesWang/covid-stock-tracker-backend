const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
    ticker: {
        type: String,
        required:  true
    },
    dates: {
        type: Object
    },
    companyData: {
        type: Object
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Stock', stockSchema);