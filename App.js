import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { store } from './src/store'
import Routes from './src/routes'
import { bindActionCreators } from 'redux'
import { WASM_ACTIONS_FUNCTIONS } from './src/store/actions/wasm'

class App extends Component {
  render() {    
    return (
      <Provider store={store}>
        <LoadContainerSetup
          wasm={this.props.wasm}
          wasmMemory={this.props.wasmMemory}
        />
      </Provider>
    )
  }
}

export default App

class LoadContainer extends Component {

  componentDidMount() {
    if (this.props.wasm) {
      this.props.onWasmLoaded(this.props.wasm, this.props.wasmMemory)
    } else {
      throw new Error("No Wasm Object found, make sure you have imported it correctly.")
    }
    
  }

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    ...WASM_ACTIONS_FUNCTIONS
  }, dispatch)

const LoadContainerSetup = connect(null, mapDispatchToProps)(LoadContainer)

