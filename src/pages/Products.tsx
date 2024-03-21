function ProductsPage() {
  async function handleFetchClick() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <h1>Products</h1>

      <button onClick={handleFetchClick} style={{ padding: "10px" }}>
        Загрузить продукты
      </button>
    </div>
  );
}

export { ProductsPage };
