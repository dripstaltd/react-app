import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequests.js';

function Home() {
  let content = null;
  const url = `https://610bd97866dd8f0017b76b06.mockapi.io/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  if (products.error) {
    content = <p>There was an error loading the products</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }
  return (
    <div>
      <h1>Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
