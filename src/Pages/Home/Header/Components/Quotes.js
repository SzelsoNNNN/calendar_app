import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Stack } from '@mui/material'

const Quotes = () => {
    const [quote, setQuote] = useState("")

    useEffect(() => {
        axios.get('https://type.fit/api/quotes')
            .then(res => {
                let random = Math.floor(Math.random() * res.data.length)
                setQuote(res.data[random])
            })
    }, [])

    return(
        <div className="header_random_quote">
                <Stack textAlign="center">
                    {quote.text} 
                    <br />~ {quote.author ? quote.author : 'Nieznany Mędrzec'}
                </Stack>
        </div>
    )
}

export default Quotes