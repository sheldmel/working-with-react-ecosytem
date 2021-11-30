import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/LIB/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { todos } from "./todos/reducers";

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => 
    createStore(
        persistedReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
