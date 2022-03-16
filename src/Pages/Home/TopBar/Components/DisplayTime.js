import React, { useContext } from 'react'
import {IconButton, Tooltip, Typography, Stack} from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FiltersDisplayTime from './FiltersDisplayTime'
import Filter from './../../filters'

const DisplayTime = () => {
    const [filters, setFilters] = useContext(Filter)
    
    const setDisplayTimeSmaller = (display_time) => {
        const currentDisplayMode = filters.display_mode
        const currentWeeklyTime = filters.display_time.weekly
        const currentMonthlyTime = filters.display_time.monthly
        const currentYearlyTime = filters.display_time.yearly
        if(currentDisplayMode === 1) {
            if(currentWeeklyTime <= 1) {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: 1,
                        monthly: currentMonthlyTime,
                        yearly: currentYearlyTime
                    }
                })
            } else {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime - 1,
                        monthly: currentMonthlyTime,
                        yearly: currentYearlyTime
                    }
                })
            }
        } else if(currentDisplayMode === 2) {
            if(currentMonthlyTime <= 1) {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: 1,
                        yearly: currentYearlyTime
                    }
                })
            } else {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: currentMonthlyTime - 1,
                        yearly: currentYearlyTime
                    }
                })
            }
        } else {
            if(currentYearlyTime <= 2010) {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: currentMonthlyTime,
                        yearly: 2010
                    }
                })
            } else {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: currentMonthlyTime,
                        yearly: currentYearlyTime - 1
                    }
                })
            }
        }
    }

    const setDisplayTimeBigger = (display_time) => {
        const currentDisplayMode = filters.display_mode
        const currentWeeklyTime = filters.display_time.weekly
        const currentMonthlyTime = filters.display_time.monthly
        const currentYearlyTime = filters.display_time.yearly
        if(currentDisplayMode === 1) {
            if(currentWeeklyTime >= 52) {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: 52,
                        monthly: currentMonthlyTime,
                        yearly: currentYearlyTime
                    }
                })
            } else {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime + 1,
                        monthly: currentMonthlyTime,
                        yearly: currentYearlyTime
                    }
                })
            }
        } else if(currentDisplayMode === 2) {
            if(currentMonthlyTime >= 12) {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: 12,
                        yearly: currentYearlyTime
                    }
                })
            } else {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: currentMonthlyTime + 1,
                        yearly: currentYearlyTime
                    }
                })
            }
        } else {
            if(currentYearlyTime >= 2030) {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: currentMonthlyTime,
                        yearly: 2030
                    }
                })
            } else {
                setFilters({
                    display_mode: currentDisplayMode,
                    display_time: {
                        weekly: currentWeeklyTime,
                        monthly: currentMonthlyTime,
                        yearly: currentYearlyTime + 1
                    }
                })
            }
        }
    }

    return(
        <div className="display_time">
            <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={4} maxWidth>
                <Tooltip title="Poprzedni">
                    <IconButton onClick={() => setDisplayTimeSmaller()}>
                        <ArrowLeftIcon/>
                    </IconButton>
                </Tooltip>
                <Typography variant="h6">
                    <FiltersDisplayTime />
                </Typography>
                <Tooltip title="Następny">
                    <IconButton onClick={() => setDisplayTimeBigger()}>
                        <ArrowRightIcon/>
                    </IconButton>
                </Tooltip>
            </Stack>
        </div>
    )
}

export default DisplayTime