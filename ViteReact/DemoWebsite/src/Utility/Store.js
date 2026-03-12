
import {createStore} from "redux";
import countReducer from "../Components/CountReducer";

let store = createStore(countReducer)
console.log(store)
export default store