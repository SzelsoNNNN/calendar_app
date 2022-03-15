import React from 'react'
import {Avatar, Stack, Typography} from '@mui/material'
import { blue } from '@mui/material/colors'

const User = () => {
    const userName = "Adrian Szeliga"
    const userAvatar = `${userName.split(" ")[0][0]}${userName.split(" ")[1][0]}`

    return(
        <div className="header_user">
            <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: blue[500] }}>{userAvatar}</Avatar>
                <Typography variant="h6">{userName}</Typography>
            </Stack>
        </div>
    )
}

export default User