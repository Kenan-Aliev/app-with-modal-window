import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import projectData from './projectData'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    projectData
  })

export default createRootReducer
