import { HOTEIS } from '../../assets/Shared/Hoteis'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hoteisArray: HOTEIS
}

const hoteisSlice = createSlice({
    name: 'hoteis',
    initialState
})

export const hoteisReducer = hoteisSlice.reducer

export const selectAllHoteis = (state) => {
    return state.hoteis.hoteisArray
}