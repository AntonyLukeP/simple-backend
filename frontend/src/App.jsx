import { useDispatch, useSelector } from "react-redux"; 
import { fetchProducts } from "./redux/productSlice";

function App() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  return (
    <>
      <div>
        <h1>Simple product Viewer</h1>

        <button onClick={() => dispatch(fetchProducts())} >  Load Products</button>

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