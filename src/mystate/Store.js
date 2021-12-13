import { createStore } from "redux";
import rootreducer from "./reducer/Index";


const store=createStore(rootreducer);

export default store;