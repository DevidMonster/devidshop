import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, false,composedEnhancers);

export default store;