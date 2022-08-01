import config from '../../config.json';

interface ProductProps {
  title: string;
  imageUrl: string;
}

const ProductItem = ({ imageUrl, title }: ProductProps) => {
  return (
    <div className="h-[400px] w-[450px]  bg-white drop-shadow-lg rounded-lg">
      {title}
      <img src={`${config.backendDomain + '/' + imageUrl}`} alt="product" />
    </div>
  );
};

export default ProductItem;
