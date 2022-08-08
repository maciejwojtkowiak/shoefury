interface ProductRowProps {
  property: string;
}

const ProductRow = ({ property }: ProductRowProps) => {
  return <h3>{property}</h3>;
};

export default ProductRow;
