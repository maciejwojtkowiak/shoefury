import LogoIcon from '../../svg/LogoIcon';

const FormHeader = () => {
  return (
    <div className="place-self-stretch-center text-4xl font-bold flex flex-row">
      <div className=" drop-shadow-xl rounded-md">
        <LogoIcon />
      </div>
      <h1>Shoe Fury</h1>
    </div>
  );
};

export default FormHeader;
