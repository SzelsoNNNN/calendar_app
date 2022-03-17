import React from 'react'
import { Stack } from '@mui/material'

const MonthView = () => {
    return(
        <div className="month-view">
            <Stack maxWidth className="views_stack" spacing={1} direction="column">
                Widok miesięczny
            </Stack>
        </div>
    )
}

export default MonthView