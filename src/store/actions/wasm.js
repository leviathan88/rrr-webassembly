import { WASM_ACTIONS } from '../../constants/Actions'

export const WASM_ACTIONS_FUNCTIONS = {
  onWasmLoaded: (wasm, wasmMemory) => ({
    type: WASM_ACTIONS.ON_WASM_LOADED,
    payload: { wasm, wasmMemory }
  })
}