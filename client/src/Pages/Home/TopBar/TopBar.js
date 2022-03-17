import React from 'react'
import DisplayMode from './Components/DisplayMode'
import DisplayTime from './Components/DisplayTime'
import { Stack } from '@mui/material'
import './TopBar.css'

const TopBar = () => {
    return(
        <div className="page_topbar">
            <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1} maxWidth>
                <DisplayMode />
                <DisplayTime />
            </Stack>
        </div>
    )
}

export default TopBar