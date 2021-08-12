import React from 'react';
// import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';

const Product = () => {
  // const { id } = useParams();
  const url = `https://script.googleusercontent.com/macros/echo?user_content_key=-CD81J-2rs9l9JdZXJWYeqdlQtj3mj4rSpJw_qmFSI9ivZ-d72bFQvvVp50g1mruQa0gI--MFKYq4astm5kTlj-QZ06ntQ2Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPg6VUGCJzDpgfE6lEhX4TEjQmSLeNBQN4z95fYgZaKv92Xvp84Y8TrZsnzeEX2G2_CV4TprH0qZM5lof7eJ9iz1lj4yy0-3Mdz9Jw9Md8uu&lib=MV7AG8eAwX8D6BLFlC8xNBPU2Oqj8G3ei`;
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
      <div key={product.data.row}>
        <h1>{product.data.name}</h1>
        <div className="img-container">
          <img className="card__img" src={product.data.images} alt={product.data.name}></img>
        </div>
        <div className="bold">£ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Product;
