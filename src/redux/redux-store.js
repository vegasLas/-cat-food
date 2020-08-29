import { createStore, combineReducers } from "redux";
import packetsReducer from "./reducer";


let reducers = combineReducers({
    packet: packetsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;