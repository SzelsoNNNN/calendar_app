import React from 'react'
import CalendarTopBar from './Components/CalendarTopBar'
import CalendarViews from './Components/CalendarViews'
import { Stack } from '@mui/material'
import './Calendar.css'

const Calendar = () => {
    return(
        <div className="page_calendar">
            <div className="calendar_app">
                <Stack direction="column"
                justifyContent="space-around"
                alignItems="center"
                maxWidth>
                    <CalendarTopBar />
                    <CalendarViews />
                </Stack>
            </div>
        </div>
    )
}

export default Calendar