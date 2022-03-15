import React from 'react'
import Watch from './Components/Watch'
import Quotes from './Components/Quotes'
import User from './Components/User'
import { Stack } from '@mui/material'
import './Header.css'

const Header = () => {
    return(
        <header className="page_header">
            <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1} maxWidth>
                <Watch />
                <Quotes />
                <User />
            </Stack>
        </header>
    )
}

export default Header