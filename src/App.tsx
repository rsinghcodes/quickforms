import '@fontsource/inter';
import { Box, CircularProgress, CssBaseline, CssVarsProvider, IconButton, extendTheme, useColorScheme } from '@mui/joy';
import { Suspense, lazy, useEffect, useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { Route, Routes } from 'react-router-dom';

// pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const theme = extendTheme({
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)'
  }
});

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id='toggle-mode'
      size='lg'
      variant='soft'
      color='neutral'
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 999,
        top: '1rem',
        right: '1rem',
        borderRadius: '50%',
        boxShadow: 'sm'
      }}
    >
      {mode === 'light' ? <BiSolidMoon /> : <BiSolidSun />}
    </IconButton>
  );
}

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <ColorSchemeToggle />
      <Suspense
        fallback={
          <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
            <CircularProgress size='lg' />
          </Box>
        }
      >
        <Box
          sx={{
            height: '100vh',
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory',
            '& > div': {
              scrollSnapAlign: 'start'
            }
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
          </Routes>
        </Box>
      </Suspense>
    </CssVarsProvider>
  );
}
export default App;
