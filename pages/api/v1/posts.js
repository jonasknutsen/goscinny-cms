const mongoose = require('mongoose')
const config = require('../../../config/config')
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

const Post = require('../../../models/Post')

export default function handle (req, res) {
  switch (req.method) {
    case 'GET':
      Post.find({ active: true }, null, { sort: { timestamp: -1 } }, function (err, posts) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(200).json({ success: true, message: 'Posts found', posts })
        }
      })
      break
    case 'POST': {
      const post = new Post()

      post.nane = req.body.name
      post.description = req.body.description
      post.heroImage = req.body.heroImage
      post.save(function (err, result) {
        if (err) {
          return res.status(200).json({ success: false, message: err })
        } else {
          return res.status(201).json({ success: true, message: 'Post added', result })
        }
      })
    }
      break
    default:
      res.status(200).json({ success: false, message: 'Bad method' })
      break
  }
}