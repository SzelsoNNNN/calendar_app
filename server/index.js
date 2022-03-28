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

app.post('/api/delete_event', (req, res) => {
    const db = fs.readFileSync('./db.json')
    const data = JSON.parse(db)
    const strData = data
    const oldPostData = JSON.parse(req.headers.body)
    const oldPost = {
        event_name: oldPostData.event_name,
        event_date: oldPostData.event_date,
        event_desc: oldPostData.event_desc
    }
    const newTitle = `${oldPostData.event_name}[archiwum]`
    const newPost = {
        event_name: newTitle,
        event_date: {
            day: oldPostData.event_date.day,
            month: oldPostData.event_date.month,
            year: oldPostData.event_date.year
        },
        event_desc: oldPostData.event_desc
    }
    const newData = JSON.stringify(strData).replace(JSON.stringify(oldPost), JSON.stringify(newPost))
    fs.writeFile('./db.json', newData, err => {
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})