import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from '../components/cardCities/CardCitiesSlice'

export const store = configureStore({
    reducer: {
        cities: citiesReducer
    }
})

