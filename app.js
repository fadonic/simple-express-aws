const app = require('express')()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.json({ success: true, data: 'Hello from express', status: 'ok' })
})

app.listen(PORT, () => {
  console.log('Server started and listening on PORT ' + PORT)
})
