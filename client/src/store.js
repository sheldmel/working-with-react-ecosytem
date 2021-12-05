import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/LIB/stateReconciler/autoMergeLevel2";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { todos, isLoading } from "./todos/reducers";

const reducers = {
    todos,
    isLoading
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
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
