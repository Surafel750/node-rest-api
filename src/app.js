const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
app.use('/api', limiter)

app.get('/', (req, res) => {
  res.json({ message: 'Node REST API — running ✅', version: '1.0.0' })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

module.exports = app
