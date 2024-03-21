import {  useState } from "react";
import './productsPage.css'
function ProductsPage() {
  async function handleFetchClick() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setproducts(json.products));
  }
  const [products,setproducts] = useState([]);
  console.log(products);
  
async function handleAddClick() {
  
}
  return (
    <div>
      <h1>Products</h1>

      <button onClick={handleFetchClick} style={{ padding: "10px", backgroundColor: "green", "color": "white" }}>
        Загрузить продукты
      </button>
       
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddClick} style={{ padding: "10px", backgroundColor: "green", "color": "white"} }>

      </button>
    </div>
  );
}

export { ProductsPage };
