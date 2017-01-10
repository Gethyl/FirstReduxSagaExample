import {combineReducers} from "redux"
import middlewareReducers from "./middlewareReducers"

const allreducers = combineReducers({
    midware:middlewareReducers
})

export default allreducers