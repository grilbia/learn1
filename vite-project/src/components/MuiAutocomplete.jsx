import { Autocomplete, Stack, TextField } from '@mui/material'
import React from 'react'
const skills = ['Html', 'Css'];
const MuiAutocomplete = () => {
  return (
    <Stack spacing={2} width={"250px"}>
        <Autocomplete options={skills} renderInput={(params)=><TextField {...params} label={"skills"}/>}/>
    </Stack>
  )
}

export default MuiAutocomplete