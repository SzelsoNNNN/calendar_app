const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/api/add_event', (req, res) => {    
    const db = fs.readFileSync('./db.json')
    const data = JSON.parse(db)
    const newKey = Object.keys(data).length + 1

    const event = JSON.parse(req.headers.body)

    const newEvent = [{
        event_name: event.title,
        event_date: {
            day: event.date.day,
            month: event.date.month,
            year: event.date.year,
        },
        event_desc: event.desc
    }]


    
    const newDb = data.concat(newEvent)
    fs.writeFile('./db.json', (JSON.stringify(newDb, null, 2)), err => {
        if(err) { console.log(err) }
    })
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