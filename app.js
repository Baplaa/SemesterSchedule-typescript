const express = require('express')
const app = express()
const port = 8081
const path = require('path')
const data = require('./details.json')

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, '/courses.js'))
});

app.get('/json', (req, res) => {
  res.send(data)
})

app.listen(port, () => console.log('Listening on port 8081'));