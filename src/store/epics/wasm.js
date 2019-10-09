import { map, mergeMap, catchError, tap } from 'rxjs/operators'
import { of, empty } from 'rxjs'
import { ofType, combineEpics } from 'redux-observable'

import { WASM_ACTIONS } from '../../constants/Actions'
import wasmService from '../../services/wasm'

const handleWasmLoading = (action$) => action$.pipe(
  ofType(WASM_ACTIONS.ON_WASM_LOADED),
  tap(data => {
    console.log(data.payload)
    wasmService.initializeWasm(data.payload)
  }),
  map(_ => ({ type: WASM_ACTIONS.ON_WASM_INITIALIZED })),
  catchError(() => of({
    type: WASM_ACTIONS.ON_WASM_INIT_ERROR
  }))
)

const handleWasmInitialized = action$ => action$.pipe(
  ofType(WASM_ACTIONS.ON_WASM_INITIALIZED),
  tap(data => {
    console.log(data)
  }),
  mergeMap(_ => empty())
)

export const wasmEpic = combineEpics(  
  handleWasmLoading,
  handleWasmInitialized
)
