import { combineEpics } from 'redux-observable'
import { wasmEpic } from './wasm'

export const rootEpic = combineEpics(
  wasmEpic,
)