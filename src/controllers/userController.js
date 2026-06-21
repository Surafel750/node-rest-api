const User = require('../models/User')

exports.getAll = async (req, res) => {
  const users = await User.find().select('-__v')
  res.json({ count: users.length, users })
}

exports.getOne = async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
}

exports.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true, runValidators: true,
  })
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
}

exports.remove = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json({ message: 'User deleted' })
}
