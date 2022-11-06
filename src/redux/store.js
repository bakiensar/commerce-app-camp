import { combineReducers, createStore } from 'redux'
import tokenReducer from './reducers/tokenReducer'

const rootReducer = combineReducers({
  tokenState: tokenReducer,
})

const store = createStore(rootReducer)

export default store
