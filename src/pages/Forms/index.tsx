import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';

// icons
import AddIcon from '@mui/icons-material/Add';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function Forms() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs size='sm' aria-label='breadcrumbs' separator={<ChevronRightRoundedIcon />} sx={{ pl: 0 }}>
          <Link underline='none' color='neutral' component={RouterLink} to='/dashboard' aria-label='Home'>
            <HomeRoundedIcon />
          </Link>
          <Link underline='hover' color='neutral' component={RouterLink} to='/dashboard' fontSize={12} fontWeight={500}>
            Dashboard
          </Link>
          <Typography color='primary' fontWeight={500} fontSize={12}>
            Forms
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: 'flex',
          my: 1,
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        <Typography level='h2'>Forms</Typography>
        <Button color='primary' startDecorator={<AddIcon />} size='sm'>
          New Form
        </Button>
      </Box>
    </>
  );
}

export default Forms;
