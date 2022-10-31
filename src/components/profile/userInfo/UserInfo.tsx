import React, { useEffect, useRef, useState } from "react";
import { ImPencil } from "react-icons/im";
import shoeImg from "images/shoe.png";
import { useAppDispatch } from "store/hooks/reduxHooks";
import { editUserName } from "store/user/thunks";

interface UserInfoProps {
  name: string;
}

const UserInfo = ({ name }: UserInfoProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setNameValue(name);
  }, []);

  const onClickHandler = (): void => {
    setIsEditable((prevMode) => !prevMode);
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNameValue(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsEditable(false);
    console.log(nameValue);
    void dispatch(editUserName(nameValue));
  };

  return (
    <div className="px-12 pt-32 bg-gray-100 flex items-start">
      <img src={shoeImg} className="w-[400px] h-[400px] rounded-full " />
      <div className="flex relative">
        {isEditable ? (
          <form onSubmit={(event) => onSubmitHandler(event)}>
            <input
              ref={inputRef}
              className="text-4xl rounded-md transition-all"
              onChange={onChangeHandler}
              value={nameValue}
            />
          </form>
        ) : (
          <h3 className="text-4xl font-bold">{nameValue}</h3>
        )}

        <div className="self-center ml-4">
          <ImPencil
            size={24}
            onClick={onClickHandler}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
