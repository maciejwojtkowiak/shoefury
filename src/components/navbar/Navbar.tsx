import Logo from 'components/navbar/Logo';
import RightSideNavbar from 'components/navbar/RightsideNavbar';

const Navbar = () => {
  return (
    <div className="bg-white border-b-2 drop-shadow w-full h-16 ">
      <ul className="text-black grid grid-cols-2 h-full items-center justify-center ">
        <Logo />
        <RightSideNavbar />
      </ul>
    </div>
  );
};

export default Navbar;
