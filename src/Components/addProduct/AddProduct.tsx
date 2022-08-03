import { Fragment, useState } from 'react';
import config from '../../config.json';
import FormInput from '../inputs/FormInput';
import Navbar from '../navbar/Navbar';

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
    <Fragment>
      <Navbar />
      <div className="h-screen grid place-items-center">
        <form className="flex justify-center items-center flex-col border-2 px-6 py-24 bg-white gap-8 w-[500px] h-[700px]  ">
          <FormInput placeholder="Product name" onChange={onChangeHandler} type="text" />
          <div>
            <label
              className=" block text-center mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="border-2 border-orange-200 cursor-pointer file:cursor-pointer file:bg-orange-300 file:px-6 file:py-2 file:mr-4 file:border-none p-2 file:font-bold file:text-white"
              placeholder="Product name"
              onChange={onFileUpload}
              id="file_input"
              type="file"
            />
          </div>

          <button
            onClick={onClickHandler}
            className="border-2 border-orange-200 rounded-full px-12 py-2 font-bold text-xl hover:border-orange-500 hover:bg-orange-500 hover:text-white transition"
          >
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
