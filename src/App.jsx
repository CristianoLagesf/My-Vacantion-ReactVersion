
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Router } from './Router'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LocalizationProvider>
  )
}

export default App
