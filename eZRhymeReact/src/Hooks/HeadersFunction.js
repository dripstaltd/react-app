import ProductCard from '../Components/ProductCard';

export default function HeadersFunction(props) {
  // const dataArr = [];

  // props.slice(1).forEach((value) => {
  //   const data = { ...value };
  //   dataArr.push(data);
  // });

  return props.map((product) => <ProductCard className="" key={product.row} product={product} />);
}
