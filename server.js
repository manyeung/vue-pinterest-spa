const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))

const defaultCallback = (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
}

app.get('/', defaultCallback)
app.get('/about', defaultCallback)
app.get('/image/:id', defaultCallback)

app.listen(port, () => {
    console.log(`Click to open: http://localhost:${port}`)
})