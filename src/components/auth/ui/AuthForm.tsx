import React from "react";

interface AuthFormProps {
  children: React.ReactNode;
}

const AuthForm = ({ children }: AuthFormProps): JSX.Element => {
  return (
    <div className="grid place-items-center w-full h-screen ">
      <form className="grid place-items-center flex-col gap-16 w-[500px] h-[700px] px-8 py-4 border-2 bg-white">
        <div className="h-full grid place-items-center w-full">{children}</div>
      </form>
    </div>
  );
};

export default AuthForm;
