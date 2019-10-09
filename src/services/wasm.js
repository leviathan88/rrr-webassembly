class WasmService {
  initializeWasm = wasmData => {
    if (wasmData) {
      const { wasm, wasmMemory } = wasmData
      this.wasm = wasm
      this.wasmMemory = wasmMemory
    } else {
      throw new Error('wasm module missing')
    }
  }
}

const wasmService = new WasmService()

export default wasmService