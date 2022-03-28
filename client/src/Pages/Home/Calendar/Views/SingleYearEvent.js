import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Stack, Card, CardContent, Alert, Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const SingleEvent = (props) => {
    const [events, setEvents] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:3001/api/show_events')
            .then(res => {
                setEvents(res.data)
                //console.log(events)
            })
    }, [])

    let eventsFiltered = []
    events.map(event => {
        if(event.event_date.year === props.currentYear && ((event.event_date.month - 1) === props.monthKey) && !event.event_name.endsWith(`[archiwum]`)) { eventsFiltered.push(event) }
    })

    async function changeData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            body: JSON.stringify(data)
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          
        })
        return response.json()
      }

    const deleteEvent = key => {
        console.log(eventsFiltered[key])
        changeData('http://localhost:3001/api/delete_event/', eventsFiltered[key])
        window.location.reload()
    }

    if(eventsFiltered[0]) {
        return(
            <Stack maxWidth direction="row" spacing={2} justifyContent="space_evenly">
                {
                    eventsFiltered.map((event, key) => {
                        /* console.log(event) */
                        return(
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {event.event_name} - {event.event_date.day}/{event.event_date.month}/{event.event_date.year}
                                        <Tooltip title="Usuń wybrane wydarzenie">
                                            <IconButton size="small" aria-label="delete" onClick={() => deleteEvent(key)}>
                                                <DeleteIcon fontSize="small" color="error" />
                                            </IconButton>
                                        </Tooltip>
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
                <Alert variant="outlined" severity="info">Brak zapisanych wydarzeń w tym okresie</Alert>
            </Stack>
        )
    }
}

export default SingleEvent