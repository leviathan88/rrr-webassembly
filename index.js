import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
// import * as wasm from 'NAME_OF_YOUR_WASM'
// import { memory } from 'NAME_OF_YOUR_WASM/NAME_OF_YOUR_WASM_bg'

// ? pass wasm and wasmMemory here as <App wasm={wasm} wasmMemory={memory} />
ReactDOM.render(
  <App />, 
  document.getElementById('app')
)
