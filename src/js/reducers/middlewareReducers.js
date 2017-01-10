const initialState = {output:"@@redux/INIT action triggered"}

const middlewareReducers = (state=initialState,action) => {
    console.info(action.type)
    switch (action.type){
        case 'ASYNC_TEST': 
        case 'ASYNC_TEST_NOACTIONCREATOR': 
        case 'ASYNC_TEST_INITIAL': 
        case 'ASYNC_FETCH_INITIAL':
        case 'ASYNC_FETCH_SUCCESS':
        case 'ASYNC_FETCH_ERROR':
            return {...state,output:action.output}
        case 'ASYNC_TEST_SAGA': 
            return {...state,output:action.output} //"ASYNC_TEST_SAGA action was triggered from ACTION"}
        default: return {...state}

    }

}

export default middlewareReducers