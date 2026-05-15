const Post = require('../models/Post')

exports.getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, tag, search } = req.query
    const query = {}
    if (tag) query.tags = tag
    if (search) query.$text = { $search: search }

    const posts = await Post.find(query)
      .populate('author', 'name email')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))

    const total = await Post.countDocuments(query)
    res.json({ total, page: Number(page), posts })
  } catch (err) {
    next(err)
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('author', 'name')
    if (!post) return res.status(404).json({ error: 'Post not found' })
    res.json(post)
  } catch (err) {
    next(err)
  }
}

exports.create = async (req, res, next) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user.id })
    res.status(201).json(post)
  } catch (err) {
    next(err)
  }
}

exports.update = async (req, res, next) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, author: req.user.id },
      req.body,
      { new: true, runValidators: true }
    )
    if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' })
    res.json(post)
  } catch (err) {
    next(err)
  }
}

exports.remove = async (req, res, next) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id })
    if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' })
    res.json({ message: 'Post deleted' })
  } catch (err) {
    next(err)
  }
}
