import React, { useState } from 'react'
import Filter from './filters'
import Header from './Header/Header'

const filterStartPoint = {
    display_mode: 1,
    display_time: 0
}

const Home = () => {
    const [filters, setFilters] = useState(filterStartPoint)
    return(
        <Filter.Provider value={[filters, setFilters]}>
            <Header />
        </Filter.Provider>
    )
}

export default Home