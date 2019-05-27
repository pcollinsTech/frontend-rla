import React, {Component} from 'react'
import axios from 'axios'
import './style.css'
import PropTypes from 'prop-types';

class Products extends Component {
  constructor(props){
    super(props)
    this.state={
      search:'',
      products: []
    }
  }

  componentDidMount() {
    console.log("hi")
    return this.getProducts()
  }

  getProducts() {
    console.log("get")
    return axios.get('http://rlaapi-env.pnqpme3byb.us-east-2.elasticbeanstalk.com/api/products')
      .then(res => {
        this.setState({
          ...this.state,
          search: "",
          products: res.data
        })
      })
      .catch(err => console.log(err))
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    })
  }

  render() {

    const { products } = this.state
    let filterProducts = this.state.products.filter(product => {
      return product.part_number.toLowerCase().includes(this.state.search.toLowerCase()) ||
        product.description.toLowerCase().includes(this.state.search.toLowerCase()) ||
        product.category.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        product.sub_category.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    
    return (
      <div className="container">
        <form className="form-inline mt-5">
          <div className="form-group mb-2 mx-auto ">
            <label className="mr-2">Search</label>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)} />
          </div>
        </form>
        
        <table className="table mt-5">
          <thead>
            <tr >
              <th scope="col">Category</th>
              <th scope="col">Sub Category</th>
              <th scope="col">Part Number</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {filterProducts.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{product.sub_category.name}</td>
                  <td>{product.category.name}</td>
                  <td>{product.part_number}</td>
                  <td>{product.description}</td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>

      </div>
    )
  }
}

Products.propTypes = {
  products: PropTypes.array,
}

export default Products
