import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    user: null,
    logUser: false,
}

export const userSlice = createSlice( { 
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setUser: (state, action) => {
            return{
                ...state,
                user: action.payload,
            }
        },
        logUser: (state, action) =>{
            if (state.user.email == action.payload.email && state.user.password == action.payload.password ) {
                return {...state, logUser: true}
            }
        },
        logOut: (state) =>{
            return{
                ...state,
                logUser: false
            }
        }
    }
 }
)


export const {setUser, logUser, logOut} = userSlice.actions;

export default userSlice.reducer;