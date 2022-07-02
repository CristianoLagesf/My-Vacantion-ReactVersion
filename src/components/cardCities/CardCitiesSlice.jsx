import { CITIES } from '../../assets/Shared/Cities'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    citiesArray: CITIES
}

const citiesSlice = createSlice({
    name: 'cities',
    initialState
})

export const citiesReducer = citiesSlice.reducer

export const selectAllCities = (state) => {
    return state.cities.citiesArray
}