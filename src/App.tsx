import { CssBaseline, ThemeProvider } from '@mui/material';
import { accentColors, theme } from './Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.tsx';

export const accentColor = accentColors[Math.floor(Math.random() * accentColors.length)];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;