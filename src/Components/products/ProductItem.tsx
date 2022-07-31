interface ProductProps {
  title: string;
}

const ProductItem = ({ title }: ProductProps) => {
  return (
    <div className="h-[400px] w-[450px]  bg-white drop-shadow-lg rounded-lg">
      {title}
    </div>
  );
};

export default ProductItem;
