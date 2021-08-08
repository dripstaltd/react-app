import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';

const Product = () => {
  const { id } = useParams();
  const url = `https://610bd97866dd8f0017b76b06.mockapi.io/products/${id}`;
  let content = null;
  let product = useAxiosGet(url);

  if (product.error) {
    console.error('product error');
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }
  if (product.data) {
    content = (
      <div>
        <h1>{product.data.name}</h1>
        <div className="img-container">
          <img className="img" src={product.data.images} alt={product.data.name}></img>
        </div>
        <div className="bold">£ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Product;
