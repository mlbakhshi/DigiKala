import { combineReducers } from "redux";
import AuthReducer from './auth'
import ordersReducer from "./ordersCount";


const DataReducer = combineReducers({
    auth: AuthReducer,
    cntOrder:ordersReducer
});
export default DataReducer;

