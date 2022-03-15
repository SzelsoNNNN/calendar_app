import React, { useRef, useState, useEffect } from 'react'

const useCurrentCallback = (callback) => {
    const reference = useRef()
    reference.current = callback
    return (...args) => {
        return reference.current?.(...args)
    }
}

const Watch = () => {
    const [time, setTime] = useState("")
    const currentCallback = useCurrentCallback(() => {
        const date = new Date()
        setTime(date.toLocaleString())
    })

    useEffect(() => {
        const handle = setInterval(currentCallback, 100)
        return() => clearInterval(handle)
    }, [])

    return(
        <div className="header_server_time">
            {time}
        </div>
    )
}

export default Watch