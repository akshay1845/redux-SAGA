import {createStore, applyMiddleware} from "redux"
import rootReducer from './redux/reducers/index'
// import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./rootSaga";
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)) 
)
sagaMiddleware.run(rootSaga)


export default store
