import {dispatch} from 'react-redux'

export const asyncTestInitial = () => {
    return {
        type: "ASYNC_TEST_INITIAL",
        output: "ASYNC_TEST_INITIAL Action Creator!!" 
    }
}

export const asyncTestSaga = (output) => {
    return {
        type: "ASYNC_TEST_SAGA",
        output: output //"ASYNC_TEST_SAGA triggered from Action"
    }
}

export const asyncFetchInitial = () => {
    return {
        type: "ASYNC_FETCH_INITIAL",
        output: "ASYNC_FETCH_INITIAL action triggered!!" 
    }
}

export const asyncFetchSuccess = (dummyOutput) => {
    return {
        type: "ASYNC_FETCH_SUCCESS",
        output: "ASYNC_FETCH_SUCCESS ".concat(dummyOutput)
    }
}

export const asyncFetchError = () => {
    return {
        type: "ASYNC_FETCH_ERROR",
        output: "ASYNC_FETCH_ERROR - Async fetch failed"
    }
}