import { Box } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';

import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import CountrySelector from '../../components/CountrySelector';

function Profile() {
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
            Settings
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
        <Typography level='h2'>Settings</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: {
            xs: 2,
            md: 6
          },
          py: {
            xs: 2,
            md: 3
          }
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level='title-md'>Personal info</Typography>
            <Typography level='body-sm'>Customize how your profile information will apper to the networks.</Typography>
          </Box>
          <Divider />
          <Stack direction='row' spacing={3} sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}>
            <Stack direction='column' spacing={1}>
              <AspectRatio ratio='1' maxHeight={200} sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
                  srcSet='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x'
                  loading='lazy'
                  alt=''
                />
              </AspectRatio>
              <IconButton
                aria-label='upload new picture'
                size='sm'
                variant='outlined'
                color='neutral'
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: 'sm'
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      sm: 'column',
                      md: 'row'
                    },
                    gap: 2
                  }}
                >
                  <Input size='sm' placeholder='First name' />
                  <Input size='sm' placeholder='Last name' sx={{ flexGrow: 1 }} />
                </FormControl>
              </Stack>
              <Stack direction='row' spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input size='sm' defaultValue='UI Developer' />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size='sm'
                    type='email'
                    startDecorator={<EmailRoundedIcon />}
                    placeholder='email'
                    defaultValue='siriwatk@test.com'
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <div>
                <CountrySelector />
              </div>
              <div>
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Timezone</FormLabel>
                  <Select size='sm' startDecorator={<AccessTimeFilledRoundedIcon />} defaultValue='1'>
                    <Option value='1'>
                      Indochina Time (Bangkok){' '}
                      <Typography textColor='text.tertiary' ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                    <Option value='2'>
                      Indochina Time (Ho Chi Minh City){' '}
                      <Typography textColor='text.tertiary' ml={0.5}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                  </Select>
                </FormControl>
              </div>
            </Stack>
          </Stack>
          <Stack direction='column' spacing={2} sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}>
            <Stack direction='row' spacing={2}>
              <Stack direction='column' spacing={1}>
                <AspectRatio ratio='1' maxHeight={108} sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}>
                  <img
                    src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
                    srcSet='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x'
                    loading='lazy'
                    alt=''
                  />
                </AspectRatio>
                <IconButton
                  aria-label='upload new picture'
                  size='sm'
                  variant='outlined'
                  color='neutral'
                  sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: 85,
                    top: 180,
                    boxShadow: 'sm'
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row'
                    },
                    gap: 2
                  }}
                >
                  <Input size='sm' placeholder='First name' />
                  <Input size='sm' placeholder='Last name' />
                </FormControl>
              </Stack>
            </Stack>

            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input size='sm' defaultValue='UI Developer' />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size='sm'
                type='email'
                startDecorator={<EmailRoundedIcon />}
                placeholder='email'
                defaultValue='siriwatk@test.com'
                sx={{ flexGrow: 1 }}
              />
            </FormControl>

            <div>
              <CountrySelector />
            </div>
            <div>
              <FormControl sx={{ display: { sm: 'contents' } }}>
                <FormLabel>Timezone</FormLabel>
                <Select size='sm' startDecorator={<AccessTimeFilledRoundedIcon />} defaultValue='1'>
                  <Option value='1'>
                    Indochina Time (Bangkok){' '}
                    <Typography textColor='text.tertiary' ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                  <Option value='2'>
                    Indochina Time (Ho Chi Minh City){' '}
                    <Typography textColor='text.tertiary' ml={0.5}>
                      — GMT+07:00
                    </Typography>
                  </Option>
                </Select>
              </FormControl>
            </div>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ pt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button size='sm' variant='solid' color='danger'>
                Delete Account
              </Button>
              <div>
                <Button size='sm' variant='outlined' color='neutral'>
                  Cancel
                </Button>
                <Button size='sm' variant='solid' sx={{ ml: 2 }}>
                  Save
                </Button>
              </div>
            </CardActions>
          </CardOverflow>
        </Card>
      </Box>
    </>
  );
}

export default Profile;
