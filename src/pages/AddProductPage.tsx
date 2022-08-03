import AddProduct from '../components/addProduct/AddProduct';
import IsAuth from '../components/wrappers/IsAuth';
const AddProductPage = () => {
  return (
    <IsAuth>
      <AddProduct />
    </IsAuth>
  );
};

export default AddProductPage;
