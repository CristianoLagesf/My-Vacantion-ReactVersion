
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Router } from './Router'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Provider } from 'react-redux';
import { store } from './assets/store'

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </LocalizationProvider>
  )
}

export default App
