import React, { Fragment, useState } from "react";
import config from "config/config.json";

import SquareButton from "components/ui/buttons/SquareButton";
// import FormButton from "components/ui/buttons/FormButton";
import FileInput from "components/ui/inputs/FileInput";
import FormInput from "components/ui/inputs/FormInput";
import FormArea from "components/ui/textareas/FormArea";

const AddProduct = (): JSX.Element => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
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

  const onDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setDescription(event.target.value);
  };

  // const testHandler = (): void => {
  //   console.log("hej");
  // };

  const onClickHandler = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", productName);
    formData.append("image", selectedFile as File);
    formData.append("price", price);
    formData.append("description", description);
    const addProduct = async (): Promise<void> => {
      try {
        await fetch(`${config.backendDomain}/product/add-product`, {
          method: "POST",
          headers: {
            Authorization: `Bearer + ${localStorage.getItem("token") ?? ""}`,
          },
          body: formData,
        });
      } catch (error) {
        console.log(error);
      }
    };
    void addProduct();
  };
  return (
    <Fragment>
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
          <FormArea
            placeholder="Product description"
            onChangeHandler={onDescriptionChange}
          />
          <FileInput label="Upload product image" onFileUpload={onFileUpload} />
          <SquareButton
            width="w-[12rem]"
            height="h-[8rem]"
            buttonText="Add"
            onClickHandler={onClickHandler}
            textSize="xl"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
