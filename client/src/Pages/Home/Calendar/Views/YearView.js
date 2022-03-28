import React, { useContext } from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Filter from './../../filters'
import SingleEvent from './SingleYearEvent.js'

const YearView = () => {
    const [filters, setFilters] = useContext(Filter)
    
    const miesiace = [
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
        'Grudzień',
    ]
    
    return(
        <div className="year-view">
            <Stack maxWidth className="views_stack" spacing={1}>
                {
                    miesiace.map((month, key) => {
                        return (
                                <Accordion key={key} sx={{bgcolor: [(key === new Date().getMonth() && filters.display_time.yearly === new Date().getFullYear())  ? 'rgba(0, 0, 200, .2)' : 'rgba(0, 0, 0, .1)'], color: 'black'}} className="accordion_mui">
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography>{month} {filters.display_time.yearly}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <SingleEvent monthKey={key} currentYear={filters.display_time.yearly.toString()}/>
                                    </AccordionDetails>
                                </Accordion>
                        )
                    })
                }
            </Stack>
        </div>
    )
}

export default YearView