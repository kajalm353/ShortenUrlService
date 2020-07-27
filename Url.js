/**
 * This is the url model.
 * Creating schema for url
 *
 * @class url
 */
var mongoose = require('mongoose')

var urlSchema = new mongoose.Schema({
       urlCode: {type: String},
       longUrl : {type: String},
       shortUrl: {type: String},
       date: {type: Date,  default: new Date()}
    })

var url = mongoose.model('Url', urlSchema);

module.exports = url;