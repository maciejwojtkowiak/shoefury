import React, { useState } from "react";
import { Formik } from "formik";

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value)
    }
    const onClickHandler = (e: React.FormEvent) => {
        e.preventDefault()
        fetch('http://localhost:5000/product/add-product', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: productName
            })
        })
    }
  return (
    <form className="grid place-items-center h-screen">
      <input placeholder="Product name" onChange={onChangeHandler}/>
      <button onClick={onClickHandler}>Add</button>
    </form>
  );
};

export default AddProduct;
