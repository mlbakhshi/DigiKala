import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import persistState from "redux-localstorage";
import Saga from "./saga";
import DataReducer from "./data/DataReducer";

const initialiseSagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        data: DataReducer,
    }),
    composeEnhancers(applyMiddleware(initialiseSagaMiddleware),
        persistState())

);

 initialiseSagaMiddleware.run(Saga);

export default store;
