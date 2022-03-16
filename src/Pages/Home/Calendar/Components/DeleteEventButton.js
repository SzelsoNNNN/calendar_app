import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Paper } from '@mui/material'
import { TextField, Stack, Tooltip } from '@mui/material'

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

const DeleteEventButton = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }

    return(
        <>
            <Tooltip title="Usuń wybrane wydarzenie">
              <Button variant="contained" color="error" onClick={() => handleClickOpen()}>
                  Usuń wydarzenie
              </Button>
            </Tooltip>
            <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Usuwanie wydarzenia
                </DialogTitle>
                <DialogContent sx={{minWidth: '40vw'}}>
                    <DialogContentText padding={2}>
                        <Stack spacing={2}>
                            Tu wydarzenia i button od usuwania
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleClose}>Zamknij</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteEventButton