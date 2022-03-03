import {all} from "redux-saga/effects"
import {waitForApi} from "../src/sagas/apiSaga"

export default function* rootSaga(){
    yield all([waitForApi()])
}