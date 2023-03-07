import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginProps } from '../../screens/Login/Login';

export interface CounterState {
  value: number;
  isAuthenticated: boolean;
}

const initialState: CounterState = {
  value: 0,
  isAuthenticated: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    trigger: (state, action: PayloadAction<{type: 'increase' | 'zero'}>) => {},
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    initialize: (state) => {
      state.value = 0
    },
    login: (state) => {
        state.isAuthenticated = true;
    },
    logout: (state) => {
        state.isAuthenticated = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { trigger, increment, decrement, incrementByAmount, initialize, login, logout } = counterSlice.actions

export default counterSlice.reducer