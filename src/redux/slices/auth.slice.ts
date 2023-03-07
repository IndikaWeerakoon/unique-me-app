import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
    isIntermediate: boolean;
    errorMessage: string;
    phoneNumber: string;
    loading: boolean;
    tempAuthUser: any;
}

const initialState:AuthState = {
    isAuthenticated: false,
    isIntermediate: false,
    errorMessage: '',
    phoneNumber: '',
    loading: false,
    tempAuthUser: null,
}

const authSlice = createSlice({
    name: '@auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{phoneNumber: string}>) => {
            state.loading = true;
        },
        confirmLogin: (state, action: PayloadAction<{phoneNumber: string, shortCode: string}>) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        authStatusUpdate:(state, action: PayloadAction<{authStatus: boolean}>) => {
            state.loading = false;
            state.isAuthenticated = action.payload.authStatus;
            if(action.payload.authStatus) {
                state.errorMessage = '';
            }
        },
        updateIntermedeateState: (state, action: PayloadAction<{ user: any, phoneNumber?: string, errorMessage?: string}>) => {
            state.isIntermediate = true;
            state.loading = false;
            state.tempAuthUser = action.payload.user;
            state.errorMessage = action.payload.errorMessage || '';
            if (action.payload.phoneNumber) {
                state.phoneNumber = action.payload.phoneNumber;
            }
        },
        setErrorMessage: (state, action: PayloadAction<{message?: string}>) => {
            state.errorMessage = action.payload.message || ''
        },
        clearIntermedeateState: (state) => {
            state.isIntermediate = false;
            state.loading = false;
            state.phoneNumber = '';
            state.errorMessage = '';
            state.tempAuthUser = null;
        },
        logoutTrigger: (state) => {
            state.loading = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.isIntermediate = false;
            state.loading = false;
            state.phoneNumber = '';
            state.errorMessage = '';
        }

    }
})

export default authSlice.reducer;

export const authAction = authSlice.actions;