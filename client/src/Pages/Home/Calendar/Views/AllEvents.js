import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Stack, Card, CardContent, Alert, TextField, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const AllEvents = (props) => {
    const [events, setEvents] = useState([])
    const [quickFilter, setQuickFilter] = useState('')

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
        if(!event.event_name.endsWith('[archiwum]')) {
            eventsFiltered.push(event)
        }
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
        <Stack maxWidth direction="column" className="fullasdasd">
            <TextField sx={{ width: '98%', m: '1%' }} variant="outlined" type="text" size="small" label="Wyszukaj po nazwie (Index i data nie są liczone do nazwy!)" onChange={e => setQuickFilter(e.target.value)} />
            <Stack maxWidth direction="row"  className="eventscontainer">
                {
                    eventsFiltered.map((event, key) => {
                        if(event.event_name.toLowerCase().includes(quickFilter.toLowerCase())) {
                            return(
                                <Card className="card" sx={{ width: '21%'}} spacing={2}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {key+1}. {event.event_name} - {event.event_date.day}/{event.event_date.month}/{event.event_date.year}
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
                        }
                    })
                }
                
            </Stack>
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