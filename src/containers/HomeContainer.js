import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

class HomeContainer extends Component {
  render() {
    return (
      <HomeContent>
      </HomeContent>
    )
  }
}

const mapStateToProps = ({ wasmReducer }) => {
  return {        
    wasmLoaded: wasmReducer.loaded
  }
}

export default connect(mapStateToProps)(HomeContainer)

const HomeContent = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`