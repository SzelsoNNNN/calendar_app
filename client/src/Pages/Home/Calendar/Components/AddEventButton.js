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
      date: {
        day: '',
        month: '',
        year: ''
      },
      desc: ''
    }

    const handleClickOpen = () => {
        setOpen(true)
      }
    
      const handleClose = () => {
        setOpen(false)
      }
    
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          body: JSON.stringify(data)
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        
      })
      return response.json()
    }
    
    /* async function postData(url = '', data = {}) {
      axios.post(url, data).then((response) => {
        console.log(response)
      })
    } */

    const addToDb = (content) => {
      console.log(content)
        //http://localhost:3001/api/add_event
      postData('http://localhost:3001/api/add_event/', content)
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
                            <Stack sx={{width: '77.5%'}} spacing={2} direction="row">
                              <TextField maxWidth variant="outlined" size="small" label="Dzień" onChange={(e) => temps.date.day = e.target.value}/>
                              <TextField maxWidth variant="outlined" size="small" label="Miesiąc" onChange={(e) => temps.date.month = e.target.value}/>
                              <TextField maxWidth variant="outlined" size="small" label="Rok" onChange={(e) => temps.date.year = e.target.value}/>
                            </Stack>
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