import {takeEvery,delay} from 'redux-saga'
import {call, put, take} from 'redux-saga/effects'
import {asyncTestInitial,asyncTestSaga,asyncFetchInitial,
        asyncFetchSuccess,asyncFetchError} from '../actions/middlewareActions'


export function FetchTestData(){
    return fetch('testdata.json')
       .then((res)=> res.json())
       .then((jsondata)=> {
           const {dummyOutput} = jsondata.dummy
           return dummyOutput
       })
}

export  function* testFunction0 (action){
    yield call(testFunction1,action.output)
    yield call(delay,1000)
    yield put(asyncFetchInitial())
    try {
        const dummyOutput = yield call(FetchTestData)
        yield put(asyncFetchSuccess(dummyOutput))
    } catch (error) {
        console.log("Error in fetch" + error)
        yield put(asyncFetchError())
    }
}

export  function* testFunction1 (sagaPut){
    yield call(delay, 1000)  
    yield put({type: 'ASYNC_TEST', output:"ASYNC_TEST -" + sagaPut})
    yield put(asyncTestInitial())
    yield put({type: 'ASYNC_TEST_NOACTIONCREATOR', output:"This action is not present in ActionCreator"})
}

export default function* rootSaga (){  
     yield takeEvery("ASYNC_TEST_SAGA",testFunction0) 
}
