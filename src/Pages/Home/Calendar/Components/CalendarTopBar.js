import React from 'react'
import { Stack, Typography } from '@mui/material'
import AddEventButton from './AddEventButton'
import DeleteEventButton from './DeleteEventButton'

const CalendarTopBar = () => {
    return(
        <div className="calendar_header">
            <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1} maxWidth>
                <DeleteEventButton />
                <Typography variant="h6">
                    KALENDARZ
                </Typography>
                <AddEventButton />
            </Stack>
        </div>
    )
}

export default CalendarTopBar