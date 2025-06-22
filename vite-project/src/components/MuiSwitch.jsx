import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
     const [checked, setChecked] = useState(false);
     const handleSwitch = (event) => {
        setChecked(event.target.checked);
     }
     console.log(checked);
  return (

    <>
        <Box>
            <FormControlLabel control={<Switch checked={checked} onChange={handleSwitch } color='success'/>} label={"Dark mode"}/>
        </Box>
    </>
  )
}

export default MuiSwitch