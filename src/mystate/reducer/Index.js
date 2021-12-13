import { combineReducers } from "redux";
import increasedecreasereducer from "./Increasedecrece";

const rootreducer=combineReducers({
    incdec:increasedecreasereducer
});

export default rootreducer;