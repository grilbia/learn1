import { Stack, TextField } from '@mui/material'
import React from 'react'

const MuiTextField = () => {
  return (
    <Stack direction={"row"} spacing={2}>
        <TextField label={"name"} color='secondary' required helperText={"please fill the input"}/>
    </Stack>
  )
}

export default MuiTextField