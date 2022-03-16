import React, { useContext } from 'react'
import WeekView from './../Views/WeekView'
import MonthView from './../Views/MonthView'
import YearView from './../Views/YearView'
import Filter from './../../filters'

const CalendarViews = () => {
    const [filters, setFilters] = useContext(Filter)
    const view = filters.display_mode
    switch (view) {
        case 1:
            return(
                <WeekView />
            )
            break
        case 2:
            return(
                <MonthView />
            )
            break
        case 3:
            return(
                <YearView />
            )
        default:
            break
    }
}

export default CalendarViews