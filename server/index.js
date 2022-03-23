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
    /* {
        "event_name": "Inny event",
        "event_date": {
            "date_day": 14,
            "date_month": 5,
            "date_year": 2022
        },
        "event_desc": "Inny opis"
    } */
    /* const event = JSON.parse(req.headers.body)
    const db = fs.readFileSync('./db.json')
    let curr = JSON.parse(db)
    let eventsNew = curr + event
    console.log(event)
    fs.writeFile('./db.json', JSON.stringify(curr), err => {
        if(err) {
            console.log(err)
        } else {
            console.log('asd')
        }
    })
    res.send('dodawanie eventu') */
    
    const db = fs.readFileSync('./db.json')
    const data = JSON.parse(db)
    const newKey = Object.keys(data).length + 1

    const event = JSON.parse(req.headers.body)
    const newEvent = {
        [newKey]: {
            event_name: event.title,
            event_date: {
                day: event.date.day,
                month: event.date.month,
                year: event.date.year,
            },
            event_desc: event.desc
        }
    }
    const newEvents = JSON.stringify(newEvent, null, 2)
    fs.writeFile('./db.json', (newEvents), err => {
        if(err) { console.log(err) }
    })

    console.log(newEvent)
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