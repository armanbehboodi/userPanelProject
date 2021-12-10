import {createSlice,configureStore} from '@reduxjs/toolkit';

const userSearch = createSlice({
    name: 'userSearch',
    initialState: {CompanyName: undefined},
    reducers: {
        search(state,action){
            state.CompanyName = action.payload;
        }
    }
})

const sideBoxDisplay = createSlice({
    name: 'sideBoxDisplay',
    initialState: {isShown : false},
    reducers: {
        changeDisplay(state) {
            state.isShown = !state.isShown;
        }
    }
})

const store = configureStore({
    reducer: {userSearch: userSearch.reducer,sideBoxDisplay: sideBoxDisplay.reducer}
})

export default store;
export const searchActions = userSearch.actions;
export const displayActions = sideBoxDisplay.actions;