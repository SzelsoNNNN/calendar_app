import React, { useContext } from 'react'
import Filter from './../../filters'

const FiltersDisplayTime = () => {
    const [filters, setFilters] = useContext(Filter)
    if(filters.display_mode === 1) {
        return(
            <>
                {filters.display_time.weekly} / 52
            </>
        )
    } else if(filters.display_mode === 2) {
        return(
            <>
                {filters.display_time.monthly} / 12
            </>
        )
    } else {
        return(
            <>
                {filters.display_time.yearly}
            </>
        )
    }
}

export default FiltersDisplayTime