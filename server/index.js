const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/add_event', (req, res) => {
    console.log(req.body.temps.title)
    res.send('dodawanie eventu')
})

app.get('/api/show_events', (req, res) => {
    try {
        const db = fs.readFileSync('./db.json')
        const events = JSON.parse(db)
        res.send(events)
    } catch (error) {
        console.log(error)
        return
    }
})

app.get('/api/delete_event', (req, res) => {
    res.send('usuwanie eventu')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/add_event', (req, res) => {
    console.log(req.body.temps.title)
    res.send('dodawanie eventu')
})

app.get('/api/show_events', (req, res) => {
    try {
        const db = fs.readFileSync('./db.json')
        const events = JSON.parse(db)
        res.send(events)
    } catch (error) {
        console.log(error)
        return
    }
})

app.get('/api/delete_event', (req, res) => {
    res.send('usuwanie eventu')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})