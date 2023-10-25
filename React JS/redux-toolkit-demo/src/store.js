import { configureStore } from '@reduxjs/toolkit'
import cricketReducer from './slices/cricketers';

const reducer = {
  cricketers: cricketReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;