import {call, put, takeEvery} from 'redux-saga/effects'
import { setApi } from '../redux/actions/action1';

const api = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data  = await res.json();
    return data
}
function* fetchApi(){

        const data = yield call(api)
        
        yield put(setApi(data))
    
}

export function* waitForApi(){
    yield takeEvery("FETCH_API_DATA", fetchApi)
}