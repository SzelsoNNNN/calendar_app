import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const WeekView = () => {
    return(
        <div className="week-view">
            <Stack maxWidth className="views_stack" spacing={1}>
                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Poniedziałek - 14.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na poniedziałek
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Wtorek - 15.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na wtorek
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Środa - 16.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na środę
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Czwartek - 17.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na czwartek
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Piątek - 18.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na piątek
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Sobota - 19.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na sobotę
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Niedziela - 20.03.2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na niedzielę
                    </Typography>
                    </AccordionDetails>
                </Accordion>

            </Stack>
        </div>
    )
}

export default WeekView