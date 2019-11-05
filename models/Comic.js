var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ComicSchema = new Schema({
  title: String,
  address: [String],
  description: String,
  metaDescription: String,
  published: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Comic', ComicSchema)