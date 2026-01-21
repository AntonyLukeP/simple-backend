import { useState } from "react";
import axios from "axios"

function App() {

  const [ products, setProducts ] = useState([]);

  const fetchProducts = async() =>
  {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  }
  return (
    <>
      <div>
        <h1>Simple product Viewer</h1>

        <button onClick={fetchProducts} >  Load Products</button>

        <ul>
          {products.map((product)=>
          (
            <li> {product.name} - ₹{product.price} </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

