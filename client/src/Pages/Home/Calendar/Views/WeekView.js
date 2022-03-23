import React, {useContext} from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Filter from './../../filters'
import axios from 'axios'

const WeekView = () => {
    const [filters, setFilters] = useContext(Filter)
    const dni = [
        'Poniedziałek',
        'Wtorek',
        'Środa',
        'Czwartek',
        'Piątek',
        'Sobota',
        'Niedziela',
    ]
    const months = [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
    ]
    
    const eventy = []

    axios.get('http://localhost:3001/api/show_events').then(res => {
        eventy.push(res.data)
    })

    return(
        <div className="week-view">
            {console.log(eventy)}
            <Stack maxWidth className="views_stack" spacing={1}>
                {
                    dni.map(day => {
                        return(
                            <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>{day} {filters.display_time.weekly} / 4 - {months[filters.display_time.monthly - 1]} {filters.display_time.yearly}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Wszystkie eventy na {day}
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Stack>
        </div>
    )
}

export default WeekView