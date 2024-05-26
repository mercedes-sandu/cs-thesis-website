import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;