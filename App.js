import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  let url = "https://dummyjson.com/products";
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resProduct) => {
        setProduct(resProduct);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(product);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Product Name</th>
            <th>Description </th>
            <th>Product Image</th>
          </tr>
          {product.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.images}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
