import React, { useState } from "react";
import "./Products.css";
import ProductsData2 from "./ProductData2";
import AddRemove2 from "./AddRemove/AddRemove";

function Products2() {
  const [products, setProducts] = useState(ProductsData2);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      img,
      name,
      price,
      description,
      category,
      add: <AddRemove2 />,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImg("");
  };

  return (
    <div className="plist">
      <h1>Products List</h1>

      <div className="product">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <div className="pro">
              <img src={product.img} alt={product.name} className="pimage" />
              <h2>
                <span className="pname">{product.name}</span>
              </h2>
              <p className="price">
                <span className="pprice">{product.price} EGP</span>
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

      {/* ****************************************add new product****************************************/}

      <div className="nproduct">
        <h2>Add New Product</h2>
        <input
          type="text"
          value={img}
          placeholder="Image"
          onChange={(event) => setImg(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={price}
          placeholder="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(event) => setCategory(event.target.value)}
        />
        <br />
        <button className="nbu" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Products2;
