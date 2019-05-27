import React from 'react'
import './style.css'

export default ({products}) => {
  console.log("Products.js",products)
  return (
    <table className="table mt-5">
      <tr >
        <th scope="col">Category</th>
        <th scope="col">Sub Category</th>
        <th scope="col">Part Number</th>
        <th scope="col">Description</th>
      </tr>
        {products.map(product => {
          return (
            <tr>
              <td>{product.sub_category.name}</td>
              <td>{product.category.name}</td>
              <td>{product.part_number}</td>
              <td>{product.description}</td>
            </tr>
          )}
        )}
    </table>
// 
    // 
  )
}
