import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Stack, Card, CardContent, Alert } from '@mui/material'

const AllEvents = (props) => {
    const [events, setEvents] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:3001/api/show_events')
            .then(res => {
                setEvents(res.data)
                console.log(props.currentYear)
                //console.log(events)
            })
    }, [])

    let eventsFiltered = []
    events.map(event => {
        eventsFiltered.push(event)
    })

    if(eventsFiltered[0]) {
        return(
            <Stack maxWidth direction="row"  className="eventscontainer">
                {
                    eventsFiltered.map((event, key) => {
                        return(
                            <Card className="card" sx={{ width: '23.3%'}} spacing={2}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {key} {event.event_name} - {event.event_date.day}/{event.event_date.month}/{event.event_date.year}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.event_desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
                
            </Stack>
        )
    } else {
        return(
            <Stack>
                <Alert variant="outlined" severity="info">Brak zapisanych wydarzeń</Alert>
            </Stack>
        )
    }
}

export default AllEvents