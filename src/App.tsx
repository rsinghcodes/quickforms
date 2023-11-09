import '@fontsource/inter';
import { Box, CircularProgress, CssBaseline, CssVarsProvider, IconButton, extendTheme, useColorScheme } from '@mui/joy';
import { Suspense, lazy, useEffect, useState } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

// pages
const Home = lazy(() => import('./pages/Home'));

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
      <Suspense fallback={<CircularProgress />}>
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
            <Route path='/login' element={<Login />} />
          </Routes>
        </Box>
      </Suspense>
    </CssVarsProvider>
  );
}
export default App;
