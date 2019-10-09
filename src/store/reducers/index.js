import { combineReducers } from 'redux'
import { wasmReducer } from './wasm'

export const mainReducer = combineReducers({
  wasmReducer,
})

