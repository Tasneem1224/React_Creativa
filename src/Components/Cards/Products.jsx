import React, { Component } from "react";
import "./Products.css";
import ProductsData from "./ProductData";

class Products extends Component {
  render() {
    return (
      <div className="plist">
        <h1>Products List</h1>

        <div className="product">
          {ProductsData.map((product) => (
            <div key={product.id} className="product-container">
              <div className="pro">
                <img src={product.img} alt={product.name} className="pimage" />
                <h2>
                  <span className="pname">{product.name}</span>
                </h2>
                <p className="price">
                  <span className="pprice"> {product.price} EGP</span>
                </p>
                <p>
                  <span className="pdescription">{product.description}</span>
                </p>
                <p>
                  <span className="pcategory">{product.category}</span>
                </p>
              </div>
              <div className="padd">
                <span>{product.add}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
