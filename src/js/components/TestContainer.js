import React from "react"
import {connect} from 'react-redux'
import TestComponent from "./TestComponent"
import {asyncTestSaga} from '../actions/middlewareActions'

const mapStateToProps = (state) => {
    console.dir(state)
     return {
        output:state.midware.output
     }
    }
  
const mapDispatchToProps = (dispatch) =>  (
   
   {
   
    asyncButtonClicked:() => {
        dispatch(asyncTestSaga("ASYNC_TEST_SAGA triggered from TestContainer.js"))
    }

   }
)

export default connect(mapStateToProps,mapDispatchToProps)(TestComponent)