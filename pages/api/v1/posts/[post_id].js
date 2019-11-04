const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Post = require('../../../models/Post')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Post.findById(req.query.post_id, function (err, post) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Post found', post })
        }
      })
      break
    case 'PUT':
      Post.findByIdAndUpdate(req.query.post_id, { $set: req.body.update }, function (err, post) {
        if (err) {
          console.log(err)
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Post updated', post })
        }
      })
      break
    case 'DELETE':
      Post.findByIdAndRemove(req.params.post_id, function (err, result) {
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