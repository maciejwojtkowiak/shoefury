import React, { Fragment, useState } from "react";
import config from "config/config.json";

import Navbar from "components/navbar/Navbar";
import FormButton from "components/ui/buttons/FormButton";
import FileInput from "components/ui/inputs/FileInput";
import FormInput from "components/ui/inputs/FormInput";

const AddProduct = (): JSX.Element => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const onNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setProductName(event.target.value);
  };

  const onPriceChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPrice(event.target.value);
  };

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files != null) setSelectedFile(event.target.files[0]);
  };

  const onClickHandler = async (
    event: React.FormEvent<HTMLButtonElement>,
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", productName);
    formData.append("image", selectedFile as File);
    formData.append("price", price);
    await fetch(`${config.backendDomain}/product/add-product`, {
      method: "POST",
      headers: {
        Authorization: `Bearer + ${localStorage.getItem("token") ?? ""}`,
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
