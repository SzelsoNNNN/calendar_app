import React from 'react'
import ViewMonth from 'react-calendar'
import { Stack } from '@mui/material'

const MonthView = () => {
    return(
        <div className="month-view">
            <Stack maxWidth className="views_stack" spacing={1} direction="column">
                <ViewMonth />
            </Stack>
        </div>
    )
}

export default MonthView