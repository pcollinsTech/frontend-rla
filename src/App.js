import React, { Component } from 'react'
import axios from 'axios';

import Products from './components/Products'
import Upload from './components/Upload'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts() {
    return axios.get('http://rlaapi-env.pnqpme3byb.us-east-2.elasticbeanstalk.com/api/products')
      .then(res => {
        this.setState({
          ...this.state,
          products: res.data
        })
      })
  }

  // componentDidUpdate() {
  //   this.getProducts()
  // }

  render() {
    const {products} = this.state
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
        <Products products={products} />

      </div>
    )
  }
}

export default App
