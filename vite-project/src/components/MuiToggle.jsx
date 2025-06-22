import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';
const MuiToggle = () => {
    const [format, setFormat] = useState([]);
    console.log(format);

    const handleformat = (event, values) => {
     
       setFormat(values);
    }
    
  return (
    <>
        <ToggleButtonGroup value={format} onChange={handleformat}>
            <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
            <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
            <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
    </>
  )
}

export default MuiToggle