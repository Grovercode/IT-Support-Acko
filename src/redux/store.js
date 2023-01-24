import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import reduxThunk from "redux-thunk"
import rootReducer from "./rootReducer"

const middleWares = [reduxThunk]

if(process.env.NODE_ENV == "development")
{
    middleWares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;

