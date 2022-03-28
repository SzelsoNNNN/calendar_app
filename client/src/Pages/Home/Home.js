import React, { useState } from 'react'
import Filter from './filters'
import Header from './Header/Header'
import TopBar from './TopBar/TopBar'
import Calendar from './Calendar/Calendar'

const filterStartPoint = {
    display_mode: 3,
    display_time: {
        weekly: 1,
        monthly: new Date().getMonth() + 1,
        yearly: new Date().getFullYear()
    }
}

const Home = () => {
    const [filters, setFilters] = useState(filterStartPoint)
    return(
        <Filter.Provider value={[filters, setFilters]}>
            <Header />
            <TopBar />
            <Calendar />
        </Filter.Provider>
    )
}

export default Home