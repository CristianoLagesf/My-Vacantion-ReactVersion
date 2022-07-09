import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLogin: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setCurrentLogin: (state, action) => {
            return { ...state, currentLogin: action.payload }
        }
    }
})

export const loginReducer = loginSlice.reducer
export const { setCurrentLogin } = loginSlice.actions


export const selectCurrentLogin = (state) => {
    return state.login.currentLogin
}