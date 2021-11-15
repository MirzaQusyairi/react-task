import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { sliceForm } from "./reducer";
import formReducer from './reducer'

// const reducer = combineReducers({
//     form: sliceForm
// })

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, reducer)
// const store = configureStore({reducer: persistedReducer})
// const persistor = persistStore(store)

// export { store, persistor }

export default configureStore({
    reducer: {
        form: formReducer,
    },
})