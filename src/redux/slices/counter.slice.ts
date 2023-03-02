import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { trigger, increment, decrement, incrementByAmount, initialize } = counterSlice.actions

export default counterSlice.reducer