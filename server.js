const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// Allow CORS from anywhere (needed for frontend on different domain)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  if (req.method === 'OPTIONS') return res.sendStatus(200)
  next()
})

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
