import React, { Component } from 'react'

import Products from './components/Products'
import Upload from './components/Upload'
import './App.css'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
        <Products />
      </div>
    )
  }
}

export default App
