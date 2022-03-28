import React, { useState } from 'react'
import {Avatar, Stack, Typography, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, Paper, CardActionArea} from '@mui/material'
import { blue } from '@mui/material/colors'
import Draggable from 'react-draggable'

const PaperComponent = props => {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    )
  }

const User = () => {
    const userName = "Adrian Szeliga"
    const userAvatar = `${userName.split(" ")[0][0]}${userName.split(" ")[1][0]}`

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
      }
    
    const handleClose = () => {
      setOpen(false)
    }

    return(
        <div className="header_user">
            <Stack direction="row" alignItems="center" spacing={2}>
                    <Tooltip title="Zmień konto">
                        <IconButton onClick={() => handleClickOpen()}>
                            <Avatar sx={{ bgcolor: blue[500] }}>{userAvatar}</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6">{userName}</Typography>
                    <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                        >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Zmień konto
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText padding={2}>
                                <Stack spacing={2}>
                                    <CardActionArea>
                                        <Stack direction="row" spacing={2}>
                                            <Avatar sx={{ bgcolor: blue[500] }}>{userAvatar}</Avatar>
                                            <Typography variant="h6">{userName}</Typography>
                                        </Stack>
                                    </CardActionArea>
                                </Stack>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
            </Stack>
        </div>
    )
}

export default User