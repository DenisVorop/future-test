import { configureStore, combineReducers } from '@reduxjs/toolkit'

import booksReducer from './booksSlice/booksSlice'

const rootReducer = combineReducers({
    booksReducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
