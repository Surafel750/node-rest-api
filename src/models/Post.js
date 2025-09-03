const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String, trim: true, lowercase: true }],
  published: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
}, { timestamps: true })

postSchema.index({ title: 'text', body: 'text' })

module.exports = mongoose.model('Post', postSchema)
