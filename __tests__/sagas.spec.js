import {takeEvery,delay} from 'redux-saga'
import {call, put, take} from 'redux-saga/effects'
import {asyncTestInitial,asyncTestSaga,asyncFetchInitial,
        asyncFetchSuccess,asyncFetchError} from '../src/js/actions/middlewareActions'

import {testFunction0,testFunction1,FetchTestData} from '../src/js/sagas/sagas'

//*******************************************************************************************************
describe('>>>testFunction0 ',()=>{
    const action = {type: 'ASYNC_TEST_SAGA', output:"ASYNC_TEST_SAGA -Testing"}
    const generator = testFunction0(action) 
    it('+++ must call testFunction1', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(call(testFunction1,action.output))
    });
    it('+++ must call a delay 1000', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(call(delay, 1000))
    });
    it('+++ ASYNC_FETCH_INITIAL action', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(put(asyncFetchInitial()))
    }); 
    it('+++ call function to fetch testData.json', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(call(FetchTestData))
    });
    it('+++ ASYNC_FETCH_SUCCESS action', () => {
       
       const dummyOutput = "Dummy Output" ,
             testValue = generator.next(dummyOutput).value
       expect(testValue).toEqual(put(asyncFetchSuccess(dummyOutput)))
    }); 
    
});
//*******************************************************************************************************
describe('>>>testFunction1 ',()=>{
    const generator = testFunction1("Gethyl") 
    it('+++ must call a delay 1000', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(call(delay, 1000))
    });
    it('+++ ASYNC_TEST action', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(put({type: 'ASYNC_TEST', output:"ASYNC_TEST -Gethyl"}))
    });   
    it('+++ ASYNC_TEST_INITIAL action', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(put(asyncTestInitial()))
    });   
    it('+++ ASYNC_TEST_NOACTIONCREATOR action', () => {
       //const generator = testFunction1("Gethyl") 
       const testValue = generator.next().value
       expect(testValue).toEqual(put({type: 'ASYNC_TEST_NOACTIONCREATOR', output:"This action is not present in ActionCreator"}))
    }); 
});
//*******************************************************************************************************