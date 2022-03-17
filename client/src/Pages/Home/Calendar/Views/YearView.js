import React, { useContext } from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Filter from './../../filters'

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
                    miesiace.map(month => {
                        return (
                            <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>{month} {filters.display_time.yearly}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Wszystkie eventy na {month}
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

export default YearView