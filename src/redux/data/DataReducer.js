import { combineReducers } from "redux";
// import  basketReducer  from "./basket/reducers";
import AuthReducer from './auth'


const DataReducer = combineReducers({
    auth: AuthReducer,
    // basket:basketReducer
});
export default DataReducer;

