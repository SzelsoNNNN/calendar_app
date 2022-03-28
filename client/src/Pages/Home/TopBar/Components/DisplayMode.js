import React, { useContext } from 'react'
import { Stack, Button, Tooltip } from '@mui/material'
import Filter from './../../filters'

const DisplayMode = () => {
    const [filters, setFilters] = useContext(Filter)
    const setDisplayMode = (display_mode) => {
        const currentDisplayTime = filters.display_time
        setFilters({
            display_mode: display_mode,
            display_time: currentDisplayTime
        })
    }
    return(
        <div className="display_mode">
            <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={4} maxWidth>
                <Tooltip title="Zmień widok">
                    <Button variant={filters.display_mode === 1 ? "contained" : "outlined"}
                            onClick = {() => setDisplayMode(1)}
                    >Wszystkie</Button>
                </Tooltip>
                <Tooltip title="Zmień widok">
                    <Button disabled variant={filters.display_mode === 2 ? "contained" : "outlined"}
                            onClick = {() => setDisplayMode(2)}
                    >Archiwum</Button>
                </Tooltip>
                <Tooltip title="Zmień widok">
                    <Button variant={filters.display_mode === 3 ? "contained" : "outlined"}
                            onClick = {() => setDisplayMode(3)}
                    >Rok</Button>
                </Tooltip>
            </Stack>
        </div>
    )
}

export default DisplayMode