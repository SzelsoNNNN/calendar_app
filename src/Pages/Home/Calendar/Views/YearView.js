import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const YearView = () => {
    return(
        <div className="year-view">
            <Stack maxWidth className="views_stack" spacing={1}>
                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Styczeń 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na styczeń
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Luty 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na luteń
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Marzec 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na marzeń
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Kwiecień 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na kwiecień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Maj 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na majeń
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Czerwiec 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na czerwień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Lipiec 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na lipień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Sierpień 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na sierpień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Wrzesień 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na wrzesień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Październik 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na październień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Listopad 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na listopadzień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{bgcolor: 'rgba(0, 0, 0, .1)', color: 'black'}} className="accordion_mui">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Grudzień 2022</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Wszystkie eventy na grudzień
                    </Typography>
                    </AccordionDetails>
                </Accordion>

            </Stack>
        </div>
    )
}

export default YearView