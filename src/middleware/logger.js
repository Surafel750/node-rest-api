const logger = (req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    const ms = Date.now() - start
    const color = res.statusCode >= 400 ? '\x1b[31m' : '\x1b[32m'
    const reset = '\x1b[0m'
    console.log(`${color}${res.statusCode}${reset} ${req.method} ${req.originalUrl} — ${ms}ms`)
  })
  next()
}

module.exports = logger
