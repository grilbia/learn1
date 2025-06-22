import { Button ,Stack} from '@mui/material'

import AlarmAddIcon from '@mui/icons-material/AlarmAdd';

const MuiButton = () => {
  return (<>
    <Stack spacing={2} direction={'column'}>
      <Button variant='outlined' >outlined</Button>
      <Button variant='contained' color='secondary'>fixed</Button>
      <Button variant='text' sx={{border: 1, borderColor: 'black', margin:2}} size="small" >text</Button>
   
    </Stack>
    <Stack spacing={2} direction={"row"}>
      <Button variant={"contained"} startIcon={<AlarmAddIcon />}>Send</Button>
    </Stack>
    </>
  )
}

export default MuiButton