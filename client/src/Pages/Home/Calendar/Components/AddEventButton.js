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

    const addToDb = (content) => {
      console.log(content)
        //http://localhost:3001/api/add_event
        if(content.title.length <= 4) { return }
        if(content.date.day <= 0) { return }
        if(!(content.date.year % 4 === 0 && content.date.year % 100 !== 0) || content.date.year % 400 === 0) {
          if(content.date.month === 2 && content.date.day >= 29) { return }
        }
        if(content.date.month === 2 && content.date.day >= 30) { return }
        // month == 4 || month == 6 || month == 9 || month == 11
        if((content.date.month === 4 || content.date.month === 6 || content.date.month === 9 || content.date.month === 11) && content.date.day > 30) { return }
        if(content.date.day > 31) { return }
        if(!content.date.day || !content.date.month || !content.date.year) { return }
        //if(content.title.length <= 10) { return }

        postData('http://localhost:3001/api/add_event/', content)
        handleClose()
        window.location.reload()
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
                        <Stack spacing={2} justifyContent="center">
                            <Stack width={'80%'} spacing={2} justifyContent="center">
                              <TextField variant="outlined" size="small" label="Tytuł wydarzenia" onChange={(e) => temps.title = e.target.value}/>
                              <Stack spacing={2} direction="row">
                                <TextField maxWidth variant="outlined" type="number" size="small" label="Dzień" onChange={(e) => temps.date.day = e.target.value}/>
                                <TextField maxWidth variant="outlined" type="number" size="small" label="Miesiąc" onChange={(e) => temps.date.month = e.target.value}/>
                                <TextField maxWidth variant="outlined" type="number" size="small" label="Rok" onChange={(e) => temps.date.year = e.target.value}/>
                              </Stack>
                              <TextField id="outlined-multiline-static" multiline variant="outlined" size="small" onChange={(e) => temps.desc = e.target.value} label="Opis wydarzenia"/>
                            </Stack>
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