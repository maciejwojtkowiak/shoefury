import React, { useState } from 'react';
import config from '../../config.json';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setSelectedFile(e.target.files[0]);
  };

  const onClickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', productName);
    formData.append('image', selectedFile as File);
    fetch(`${config.backendDomain}/product/add-product`, {
      method: 'POST',
      body: formData,
    });
  };
  return (
    <div className="h-screen grid place-items-center">
      <form className="flex  justify-center items-center flex-col border-2 px-6 py-24 bg-white gap-8  ">
        <input placeholder="Product name" onChange={onChangeHandler} />
        <input placeholder="Product name" onChange={onFileUpload} type="file" />
        <button onClick={onClickHandler}>Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
