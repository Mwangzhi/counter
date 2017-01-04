import { createStore,applyMiddle } from 'redux'
import counter from './reducers.js'
let store=createStore( counter );
export default store