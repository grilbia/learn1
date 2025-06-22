import { Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const MuiRating = () => {
    const [value, setValue] = useState(0);
    const [readonly, setReadonly] = useState(false);
    const handleValue = (e, value) => {
        setValue(value);
        setReadonly(true);
    }
    console.log(value);
  return (
    <>
    <Rating 
        value={value} 
        onChange={handleValue}
        icon={<AccessTimeIcon fontSize='h6' />}
        emptyIcon={<AccountCircleIcon fontSize='h6'/>}
        readOnly={readonly}/>
        {readonly ? <Typography variant='h6' mt={2}>Thanks for rating </Typography> : ''}
    </>
  )
}

export default MuiRating