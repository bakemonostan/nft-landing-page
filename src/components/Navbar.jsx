import Logo from '../assets/logo-svg.svg';
import DesktopLogo from '../assets/desktop-logo.png';
import Menu from '../assets/icon-hamburger.svg';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-[90%] px-8 py-3 sm:border-b-[1px] border-[#141230] lg:px-[6rem]'>
      <div className='flex items-center gap-4 font-bold text-white'>
        {/* modile view logo */}
        <img src={Logo} alt='logo' className='w-[40px] sm:hidden' />
        {/* desktop view logo */}
        <img
          src={DesktopLogo}
          alt='logo'
          className=' hidden sm:block w-[120px]'
        />
        <p className='text-2xl sm:hidden'>$TIKI</p>
      </div>
      <div className='sm:hidden'>
        <img src={Menu} alt='hamburger menu' />
      </div>
      <div className='hidden sm:block'>
        <ul className='flex text-white list-none gap-12 text-[.8rem]'>
          <li>My Earnings</li>
          <li>Features</li>
          <li>Live-Charts</li>
          <li>Buy now</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
