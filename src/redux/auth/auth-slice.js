import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.pending](state, _) {
            state.error = null;
        },
        [authOperations.register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.register.rejected](state, { payload }) {
            state.error = payload;
        },
        [authOperations.logIn.pending](state, _) {
            state.error = null;
        },
        [authOperations.logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.rejected](state, { payload }) {
            state.error = payload;
        },
        [authOperations.logOut.fulfilled](state, _) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.fetchCurrentUser.pending](state, _) {
            state.isFetchingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [authOperations.fetchCurrentUser.rejected](state, _) {
            state.isFetchingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;