import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Paper } from '@mui/material'
import { TextField, Stack, Tooltip } from '@mui/material'
import Draggable from 'react-draggable'
import axios from 'axios'

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
    
    let temps = {
      title: '',
      date: '',
      desc: ''
    }

    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }
    
    const addToDb = (content) => {
      console.log(content)
        fetch('http://localhost:3001/api/add_event', {
          method: 'POST',
          body: JSON.stringify(temps)
        }).then(response => {
          return response.json()
        })
      handleClose()
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
                            <TextField sx={{width: '77.5%'}} variant="outlined" size="small" label="Tytuł wydarzenia" onChange={(e) => temps.title = e.target.value}/>
                            <TextField sx={{width: '77.5%'}} variant="outlined" size="small" label="Data wydarzenia" onChange={(e) => temps.date = e.target.value}/>
                            <TextField id="outlined-multiline-static" multiline sx={{width: '77.5%'}} variant="outlined" size="small" onChange={(e) => temps.desc = e.target.value} label="Opis wydarzenia"/>
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={() => addToDb(temps)}>Dodaj</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddEventButton