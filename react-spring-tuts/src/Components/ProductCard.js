import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <div className="product-card">
      <Paper className="card" elevation={3}>
        <Link className="" to={`/products/${props.product.id}`}>
          <div className="card__img" style={{ backgroundImage: `url('${props.product.images}')` }}></div>
        </Link>
        <div className="card__name bold">{props.product.name}</div>
        <div className="card__price bold">£{props.product.price}</div>
        <div className="card__description">{props.product.description}</div>
        <Link to={`/products/${props.product.id}`} className="card__btn">
          View
        </Link>
      </Paper>
    </div>
  );
}

export default ProductCard;
