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

const AddEventButton = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }

    return(
        <>
            <Tooltip title="Dodaj nowe wydarzenie">
              <Button variant="contained" onClick={() => handleClickOpen()}>
                  Dodaj wydarzenie
              </Button>
            </Tooltip>
            <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Dodawanie wydarzenia
                </DialogTitle>
                <DialogContent sx={{minWidth: '40vw'}}>
                    <DialogContentText padding={2}>
                        <Stack spacing={2}>
                            <TextField sx={{width: '77.5%'}} variant="outlined" size="small" label="Tytuł wydarzenia"/>
                            <TextField sx={{width: '77.5%'}} variant="outlined" size="small" label="Data wydarzenia"/>
                            <TextField id="outlined-multiline-static" multiline sx={{width: '77.5%'}} variant="outlined" size="small" label="Opis wydarzenia"/>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>Dodaj</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddEventButton