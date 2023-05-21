// RTK
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
// RTK persist
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
// RTK slices
import { dataSlice, dataSliceActions } from "./slices/dataSlice"
// RTK api
import userApi from "./apis/userApi"

const rootReducer = combineReducers({
  // slices
  [dataSlice.name]: dataSlice.reducer,
  // apis
  [userApi.reducerPath]: userApi.reducer,
})

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: [],
  },
  rootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  // apis middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware),
})
setupListeners(store.dispatch)

export const persistor = persistStore(store)

export { useSelector, useDispatch } from "react-redux"
export { dataSliceActions }
export { userApi }
