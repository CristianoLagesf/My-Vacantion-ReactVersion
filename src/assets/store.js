import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from '../components/cardCities/CardCitiesSlice'
import { hoteisReducer } from '../components/cardHoteis/CardHoteisSlice';
import { loginReducer } from '../components/login/LoginSlice'

export const store = configureStore({
    reducer: {
        cities: citiesReducer,
        hoteis: hoteisReducer,
        login: loginReducer
    }
})

