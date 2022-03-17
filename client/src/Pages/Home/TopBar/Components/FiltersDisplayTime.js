import React, { useContext } from 'react'
import Filter from './../../filters'

const FiltersDisplayTime = () => {
    const [filters, setFilters] = useContext(Filter)
    const months = [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
    ]
    if(filters.display_mode === 1) {
        return(
            <>
                {filters.display_time.weekly} / 4
            </>
        )
    } else if(filters.display_mode === 2) {
        
        return(
            <>
                {months[filters.display_time.monthly - 1]}
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