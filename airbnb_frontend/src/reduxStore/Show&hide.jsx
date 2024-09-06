import { createSlice, configureStore } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const showHide = createSlice({
  name: 'showHide',
  initialState: {
    value: false
  },
  reducers: {
    showContent: state => {
      
    },
    hide: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}