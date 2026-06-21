const jwt = require('jsonwebtoken')
const User = require('../models/User')

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' })

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const exists = await User.findOne({ email })
    if (exists) return res.status(400).json({ error: 'Email already registered' })
    const user = await User.create({ name, email, password })
    const token = signToken(user._id)
    res.status(201).json({ token, user: { id: user._id, name, email } })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email }).select('+password')
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    const token = signToken(user._id)
    res.json({ token, user: { id: user._id, name: user.name, email } })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
