const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const category = require('./Data/category.json')
const courses = require('./Data/courses.json')

app.get('/', (req, res) => {
    res.send('Courses API Running');
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = courses.find(c => c.id === id)
    res.send(selectedCategory)
})

app.listen(port, () => {
    console.log('Courses Server running on port', port)
})