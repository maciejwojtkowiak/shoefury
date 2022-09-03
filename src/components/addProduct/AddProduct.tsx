import { Fragment, useState } from 'react';
import config from 'config/config.json';
import FormInput from 'components/ui/inputs/FormInput';
import Navbar from 'components/navbar/Navbar';
import FileInput from 'components/ui/inputs/FileInput';
import FormButton from 'components/ui/buttons/FormButton';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const onNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const onPriceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setSelectedFile(event.target.files[0]);
  };

  const onClickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', productName);
    formData.append('image', selectedFile as File);
    formData.append('price', price);
    fetch(`${config.backendDomain}/product/add-product`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: formData,
    });
  };
  return (
    <Fragment>
      <Navbar />
      <div className="h-screen grid place-items-center">
        <form className="flex justify-center items-center flex-col border-2 px-6 py-24 bg-white gap-8 w-[500px] h-[700px]  ">
          <FormInput
            placeholder="Product name"
            onChange={onNameChangeHandler}
            type="text"
          />
          <FormInput
            placeholder="Product Price"
            onChange={onPriceChangeHandler}
            type="text"
          />
          <FileInput label="Upload product image" onFileUpload={onFileUpload} />
          <FormButton buttonText="Add" onClickHandler={onClickHandler} />
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
