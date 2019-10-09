import { WASM_ACTIONS } from '../../constants/Actions'
import { mergeToNewObject } from '../../util/helpers'

export const wasmReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case WASM_ACTIONS.ON_WASM_INITIALIZED:
      return mergeToNewObject(state, { loaded: true })

    default:
      return state
  }
}

const INITIAL_STATE = {
  loaded: false
}
