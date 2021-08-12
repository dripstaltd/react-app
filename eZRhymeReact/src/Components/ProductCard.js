import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import ProductModal from '../Components/ProductModal';
import Images from '../Components/Images';

function ProductCard(props) {
  let product = props.product;
  const bindData = product;
  console.log(product.image);
  return (
    <div className="">
      <Paper className="flex items-center p-4" elevation={3}>
        <Link className="" to={`/products/${product.row}`}>
          <Images className="product__image" src={product.image} />
        </Link>
        <div>
          <div className="card__name bold mb-2">{product.name}</div>
        </div>
        <ProductModal thisData={bindData} />
      </Paper>
    </div>
  );
}

export default ProductCard;
