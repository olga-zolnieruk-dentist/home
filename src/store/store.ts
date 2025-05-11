import { combineReducers, configureStore, ThunkAction, Action, Reducer } from '@reduxjs/toolkit'

import { settingsSlice } from './settings'
import { themesSlice } from './themes'


const NODE_ENV_DEV = 'development'


const rootReducer = combineReducers({
  [settingsSlice.name]: settingsSlice.reducer,
  [themesSlice.name]: themesSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

const reducer: Reducer<RootState, Action<any>> = (state, action) =>
  rootReducer(state, action)

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === NODE_ENV_DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: false
  })
})

export type AppStoreType = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default store
