import { Box, MenuItem, Chip, TextField, Stack } from '@mui/material';
import React, { useState } from 'react';

const MuiSelect = () => {
  const [country, setCountry] = useState([]);

  const handleFormat = (event) => {
    setCountry(event.target.value);
  };

  const handleDelete = (chipToDelete) => {
    setCountry((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <>
    <Box >
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {country.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              onDelete={() => handleDelete(chip)}
              color="secondary"
              variant="outlined"
              sx={{ m: 0.5 }}
            />
          ))}
        </Stack>
      </Box>
      <Box width="255px" mt={2}>
        <TextField
          label="Select country"
          select
          SelectProps={{
            multiple: true
          }}
          value={country}
          onChange={handleFormat}
          fullWidth
        >
          <MenuItem value="usa">US</MenuItem>
          <MenuItem value="Japan">Jap</MenuItem>
          <MenuItem value="korea">Kor</MenuItem>
        </TextField>
      </Box>

      
    </>
  );
};

export default MuiSelect;
