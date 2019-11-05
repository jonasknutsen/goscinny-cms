const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Post = require('../../../models/Post')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Post.findById(req.query.comic_id, function (err, comic) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Post found', comic })
        }
      })
      break
    case 'PUT':
      Post.findByIdAndUpdate(req.query.comic_id, { $set: req.body.update }, function (err, comic) {
        if (err) {
          console.log(err)
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Post updated', comic })
        }
      })
      break
    case 'DELETE':
      Post.findByIdAndRemove(req.params.comic_id, function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Post deleted', result })
        }
      })
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}